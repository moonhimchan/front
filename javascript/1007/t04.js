// t04.js
'use strict';

    class Member {
      // name;  // 생성자안의 매개변수명과 필드명이 같을경우에는 생략가능하다.
      // age;

      // 생성자
      constructor(name, age, color) {
        this._name=name;
        this._age=age;
        this._color=color;
      }

      // getter 생성
      get name() {
        return this._name;
      }

      get age() {
        return this._age;
      }

      get color() {
        return this._color;
      }

      // setter 생성
      set name(name) {
        this._name=name;
      }

      set age(age) {
        //this._age=age;
        if(age<1) age=1;
        this._age=age;
      }

      set color(color) {
        this._color=color;
      }
    }