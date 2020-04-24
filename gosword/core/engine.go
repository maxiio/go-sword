package core

import (
	"go-sword/gosword/route"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

type Engine struct {
	Db *gorm.DB
}

func (e *Engine) Load() (err error) {
	// Open db
	e.Db, err = gorm.Open("mysql", "root:123456@/goadmin?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		return
	}

	// Register route
	route.Register(e.Db)

	return nil
}

func (e *Engine) Run() (err error) {
	err = e.Load()
	if err != nil {
		return
	}

	err = http.ListenAndServe(":8082", nil)
	return
}
