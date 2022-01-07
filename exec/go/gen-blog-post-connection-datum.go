package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"time"
)

const fileTimeFormatString string = "02_01_2006"
const displayTimeFormatString string = "02 January, 2006"

// var descCommentExtractRegex *regexp.Regexp = regexp.MustCompile("/\\*(.*)\\*/\nexport default function")
// var descCommentExtractRegex *regexp.Regexp = regexp.MustCompile("/\\*(.*)\\*/\nexport default function")
var descCommentExtractRegex *regexp.Regexp = regexp.MustCompile("(?s)/\\*(.*)\\*/")
var descLineToCleanOutRegex *regexp.Regexp = regexp.MustCompile("\\s*\\*\\s*")

var rootDir string
var jsSrcDir string
var datumDir string
var blogPostsDir string
var blogPostsConnectionDatumPath string

func init() {
	wd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	rootDir = filepath.Join(wd, "..", "..")
	jsSrcDir = filepath.Join(rootDir, "src")
	datumDir = filepath.Join(jsSrcDir, "datum")
	blogPostsDir = filepath.Join(jsSrcDir, "blog-posts")
	blogPostsConnectionDatumPath = filepath.Join(datumDir, "blog-posts-connection.ts")
}

func main() {
	var files []string
	err := filepath.Walk(blogPostsDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			log.Fatal(err)
		}

		if !info.IsDir() && filepath.Ext(path) == ".tsx" {
			files = append(files, path)
		}

		return nil
	})
	if err != nil {
		log.Fatal(err)
	}
	f, err := os.Create(blogPostsConnectionDatumPath)
	if err != nil {
		log.Fatal(err)
	}
	_, err = f.WriteString("import { lazy } from \"react\";\n\nexport default [\n")
	if err != nil {
		fmt.Println(err)
		f.Close()
		os.Exit(1)
	}
	for _, file := range files {
		fileContents, err := ioutil.ReadFile(file)
		if err != nil {
			log.Fatal(err)
		}
		regexpParts := descCommentExtractRegex.FindAllStringSubmatch(string(fileContents), -1)
		description := strings.TrimSpace(descLineToCleanOutRegex.ReplaceAllString(regexpParts[0][1], " "))
		filename := filepath.Base(file)
		filenameWithoutExt := (strings.Split(filename, ".tsx"))[0]
		filenameParts := strings.Split(filenameWithoutExt, "__")
		title := strings.Join(strings.Split(filenameParts[0], "_"), " ")
		timeExtracted, err := time.Parse(fileTimeFormatString, filenameParts[1])
		if err != nil {
			log.Fatal(err)
		}
		dataUnit := fmt.Sprintf("{ id: \"%s\", title: \"%s\", description: \"%s\", date: \"%s\" },\n", filenameWithoutExt, title, description, timeExtracted)
		_, err = f.WriteString(dataUnit)
		if err != nil {
			fmt.Println(err)
			f.Close()
		}
	}

	_, err = f.WriteString("];")
	if err != nil {
		fmt.Println(err)
		f.Close()
	}
	f.Close()
}
