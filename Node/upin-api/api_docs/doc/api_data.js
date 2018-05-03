define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "G__Office_Docs_work_upin_api_api_docs_doc_main_js",
    "groupTitle": "G__Office_Docs_work_upin_api_api_docs_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/application",
    "title": "Request All application information",
    "name": "GetAllapplication",
    "group": "application",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The applications-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the application.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "logo_url",
            "description": "<p>logo url of the application.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the application.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "appstore_link",
            "description": "<p>appstore link of the application.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "advertisment_image_url",
            "description": "<p>advertisment image url of the application .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recommendation_reason",
            "description": "<p>recommendation reason of the application .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n         {\n             \"_id\":\"58302d508b647f36bcf24e02\",\n\"             name\":\"Application1\",\n              \"logo_url\":\"www.google.com/logo\",\n              \"description\":\"This is first Application\",\n              \"appstore_link\":\"www.google.com/appstore\",\n              \"advertisment_image_url\":\"www.google.com/image\",\n               \"recommendation_reason\":\"give some reason\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "application"
  },
  {
    "type": "get",
    "url": "/application/:id",
    "title": "Request One application information",
    "name": "Getapplication",
    "group": "application",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The applications-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The applications-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the application.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "logo_url",
            "description": "<p>logo url of the application.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the application.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "appstore_link",
            "description": "<p>appstore link of the application.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "advertisment_image_url",
            "description": "<p>advertisment image url of the application .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recommendation_reason",
            "description": "<p>recommendation reason of the application .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n         {\n             \"_id\":\"58302d508b647f36bcf24e02\",\n\"             name\":\"Application1\",\n              \"logo_url\":\"www.google.com/logo\",\n              \"description\":\"This is first Application\",\n              \"appstore_link\":\"www.google.com/appstore\",\n              \"advertisment_image_url\":\"www.google.com/image\",\n               \"recommendation_reason\":\"give some reason\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "application",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "applicationNotFound",
            "description": "<p>The <code>id</code> of the application was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"applicationNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/application",
    "title": "Change application information",
    "version": "0.1.0",
    "name": "Updateapplication",
    "group": "application",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/application\n\nbody:\n{\n \"application\": {\n      \"_id\" : \"582ef75c56e02c3730852121\", \n     \"name\": \"yellow\",\n     \"description\": \"Identifies color yellow\",\n     \"logo_url\": \"www.google.com/asd\",\n     \"appstore_link\": \"www.google.com/asd\",\n     \"advertisment_image_url\": \"www.google.com/asd\",\n     \"recommendation_reason\": \"Because I love it!\"\n }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The applications-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "logo_url",
            "description": "<p>logo url of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "appstore_link",
            "description": "<p>appstore link of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "advertisment_image_url",
            "description": "<p>advertisment image url of the application .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recommendation_reason",
            "description": "<p>recommendation reason of the application .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"err\":false,\n \"result\":{\n             \"ok\":1,\n             \"nModified\":1,\n             \"n\":1\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "application",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "applicationNotFound",
            "description": "<p>The <code>id</code> of the application was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"applicationNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/application",
    "title": "Create a new application",
    "version": "0.1.0",
    "name": "addapplication",
    "group": "application",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/application\n\nbody:\n{\n \"application\": {\n     \"name\": \"yellow\",\n     \"description\": \"Identifies color yellow\",\n     \"logo_url\": \"www.google.com/asd\",\n     \"appstore_link\": \"www.google.com/asd\",\n     \"advertisment_image_url\": \"www.google.com/asd\",\n     \"recommendation_reason\": \"Because I love it!\"\n }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "logo_url",
            "description": "<p>logo url of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "appstore_link",
            "description": "<p>appstore link of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "advertisment_image_url",
            "description": "<p>advertisment image url of the application .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recommendation_reason",
            "description": "<p>recommendation reason of the application .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":{\n              \"ok\":1,\n               \"n\":1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateApplicationError",
            "description": "<p>Unable to create new application.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreateApplicationError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "application"
  },
  {
    "type": "get",
    "url": "/bugreport",
    "title": "Request All bugreport information",
    "name": "GetAllbugreport",
    "group": "bugreport",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The bugreports-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the bugreport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text of the bugreport.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "report_date",
            "description": "<p>report date of the bugreport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UPIN",
            "description": "<p>UPIN of the bugreport .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          {\n             \"_id\":\"5830053ce00cf51ff888abb3\",\n             \"email\":\"xyz@gmail.com\",\n             \"text\":\"bug\",\n             \"report_date\":\"02/09/1993\",\n             \"UPIN\":\"659244592\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "bugreport"
  },
  {
    "type": "get",
    "url": "/bugreport/:id",
    "title": "Request One bugreport information",
    "name": "Getbugreport",
    "group": "bugreport",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The bugreports-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The bugreports-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the bugreport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text of the bugreport.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "report_date",
            "description": "<p>report date of the bugreport.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UPIN",
            "description": "<p>UPIN of the bugreport .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          {\n             \"_id\":\"5830053ce00cf51ff888abb3\",\n             \"email\":\"xyz@gmail.com\",\n             \"text\":\"bug\",\n             \"report_date\":\"02/09/1993\",\n             \"UPIN\":\"659244592\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "bugreport",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "bugreportNotFound",
            "description": "<p>The <code>id</code> of the bugreport was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"bugreportNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/bugreport",
    "title": "Create a new bugreport",
    "version": "0.1.0",
    "name": "addbugreport",
    "group": "bugreport",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/bugreport\n\nbody:\n{\n  \"bugReport\": {\n      \"email\": \"xyz@gmail.com\",\n      \"text\": \"bug\",\n      \"report_date\": \"02/09/1993\",\n      \"UPIN\": \"659244592\"\n  }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the bugreport.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text of the bugreport.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "report_date",
            "description": "<p>report date of the bugreport.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UPIN",
            "description": "<p>UPIN of the bugreport .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":{\n              \"ok\":1,\n               \"n\":1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatebugreportError",
            "description": "<p>Unable to create new bugreport.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatebugreportError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "bugreport"
  },
  {
    "type": "get",
    "url": "/medicine",
    "title": "Request All medicine information",
    "name": "GetAllmedicine",
    "group": "medicine",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The medicines-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url of medicine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          {\n             \"_id\": \"58304384c852841b50943263\",\n             \"name\": \"Iodine\",\n             \"image_url\": \"www.whatmedicine.com\"\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "medicine"
  },
  {
    "type": "get",
    "url": "/medicine/:id",
    "title": "Request One medicine information",
    "name": "Getmedicine",
    "group": "medicine",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The medicines-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The medicines-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url of medicine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          {\n             \"_id\": \"58304384c852841b50943263\",\n             \"name\": \"Iodine\",\n            \"image_url\": \"www.whatmedicine.com\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "medicine",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "medicineNotFound",
            "description": "<p>The <code>id</code> of the medicine was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"medicineNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/medicine",
    "title": "Create a new medicine",
    "version": "0.1.0",
    "name": "addmedicine",
    "group": "medicine",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/medicine\n\nbody:\n{\n \"medicine\": {\n     \"name\": \"Iodine\",\n     \"image_url\": \"www.whatmedicine.com\"\n }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url of the medicine.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":{\n              \"ok\":1,\n               \"n\":1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatemedicineError",
            "description": "<p>Unable to create new medicine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatemedicineError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "medicine"
  },
  {
    "type": "put",
    "url": "/medicine",
    "title": "Change medicine information",
    "version": "0.1.0",
    "name": "updatemedicine",
    "group": "medicine",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/medicine\n\nbody:\n{\n \"medicine\": {\n     \"name\": \"Iodine\",\n     \"image_url\": \"www.whatmedicine.com\"\n }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "-id",
            "description": "<p>Id of the medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of the medicine.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"err\":false,\n \"result\":{\n             \"ok\":1,\n             \"nModified\":1,\n             \"n\":1\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "medicine",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "medicineNotFound",
            "description": "<p>The <code>id</code> of the medicine was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"medicineNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/news",
    "title": "Request All news information",
    "name": "GetAllnews",
    "group": "news",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The news-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_description",
            "description": "<p>short description url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          {\n             \"_id\":\"5830053ce00cf51ff888abb3\",\n             \"title\":\"Musk settles on mars\",\n             \"content\":\"In a parallel universe\",\n             \"image_url\":\"www.google.co\",\n             \"short_description\":\"There are already many species there\",\n             \"url\":\"www.google.com\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "news"
  },
  {
    "type": "get",
    "url": "/news/:id",
    "title": "Request One news information",
    "name": "Getnews",
    "group": "news",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The newss-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The newss-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_description",
            "description": "<p>short description url of the news.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          {\n             \"_id\":\"5830053ce00cf51ff888abb3\",\n             \"title\":\"Musk settles on mars\",\n             \"content\":\"In a parallel universe\",\n             \"image_url\":\"www.google.co\",\n             \"short_description\":\"There are already many species there\",\n             \"url\":\"www.google.com\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "news",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "newsNotFound",
            "description": "<p>The <code>id</code> of the news was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"newsNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/news",
    "title": "Create a new news",
    "version": "0.1.0",
    "name": "addnews",
    "group": "news",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/news\n\nbody:\n{\n\"title\" : \"Musk settles on mars\", \n \"content\" : \"In a parallel universe\", \n \"image_url\" : \"www.google.co\", \n \"short_description\" : \"There are already many species there\", \n \"url\" : \"www.google.com\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_description",
            "description": "<p>short description of the news .</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of the news.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":{\n              \"ok\":1,\n               \"n\":1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatenewsError",
            "description": "<p>Unable to create new news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatenewsError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "news"
  },
  {
    "type": "put",
    "url": "/news",
    "title": "Change news information",
    "version": "0.1.0",
    "name": "updatenews",
    "group": "news",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/news\n\nbody:\n{\n\"_id\" : \"582ef75c56e02c3730852121\", \n\"title\" : \"Musk settles on mars\", \n \"content\" : \"In a parallel universe\", \n \"image_url\" : \"www.google.co\", \n \"short_description\" : \"There are already many species there\", \n \"url\" : \"www.google.com\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url of the news.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_description",
            "description": "<p>short description of the news .</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of the news.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"err\":false,\n \"result\":{\n             \"ok\":1,\n             \"nModified\":1,\n             \"n\":1\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "news",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "newsNotFound",
            "description": "<p>The <code>id</code> of the news was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"newsNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient:upin/activation",
    "title": "Patient activation.",
    "version": "0.1.0",
    "name": "ActivatePatient",
    "group": "patient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient:upin/activation\n\nbody:\n    {\n     \n     \"otp\": \"138443\",\n    \t\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"err\":false,\n \"result\":{\n             \"ok\":1,\n             \"nModified\":1,\n             \"n\":1\n          }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/Changepassword",
    "title": "patient Change Password",
    "version": "0.1.0",
    "name": "ChangePassword",
    "group": "patient",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/Changepassword\nbody:\n    {\n    \n     \"otp\":\"122341\",\n     \"password\": \"ffefs\",\n     \"confPassword\": \"ffefs\",\n \t\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>The patients-upin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp got by patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password of patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confPassword",
            "description": "<p>confirm Password of patient.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PwdNotMatchError",
            "description": "<p>Password and confirm password do not match.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidOtpError",
            "description": "<p>Invalid OTP Presented.Please try again.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"InvalidOtpError\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient"
  },
  {
    "type": "post",
    "url": "/patient/:upin/allergy",
    "title": "Create a new patient allergy",
    "version": "0.1.0",
    "name": "addPatientallergy",
    "group": "patient_allergy",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " endpoint: http://localhost/patient/:upin/allergy\n\n body:\n{\n  \"allergy\": {\n              \"dateDiagnosed\": \"02/09/1992\",\n              \"allergy\": \"Rash\"\n             }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dateDiagnosed",
            "description": "<p>dateDiagnosed of the patient allergy.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allergy",
            "description": "<p>allergy of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"ok\": 1,\n\"nModified\": 1,\n \"n\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientAllergyError",
            "description": "<p>Unable to create new patient allergy.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientAllergyError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_allergy"
  },
  {
    "type": "get",
    "url": "/patient/:upin/allergy",
    "title": "get patient allergy information",
    "version": "0.1.0",
    "name": "getPatientallergy",
    "group": "patient_allergy",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateDiagnosed",
            "description": "<p>dateDiagnosed of the patient allergy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allergy",
            "description": "<p>allergy of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>allergy updated date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"err\": false,\n       \"result\": {\n                    \"allergies\": [\n                                   {\n                                    \"dateDiagnosed\": \"02/09/1992\",\n                                    \"allergy\": \"Rash\",\n                                    \"id\": \"2dd06911-6f73-fc2f-9bda-dc16669c9792\",\n                                    \"UpdatedOn\": \"2016-11-11T12:14:45.422Z\"\n                                   }\n                                 ]\n                 }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_allergy",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/patient/:upin/allergy",
    "title": "Change patient allergy",
    "version": "0.1.0",
    "name": "updatePatientallergy",
    "group": "patient_allergy",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " endpoint: http://localhost/patient/:upin/allergy\n\n body:\n{\n  \"allergy\": {\n              \"dateDiagnosed\": \"02/09/1992\",\n              \"allergy\": \"Rash\"\n             }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dateDiagnosed",
            "description": "<p>dateDiagnosed of the patient allergy.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allergy",
            "description": "<p>allergy of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_allergy",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/application",
    "title": "Create a new patient application",
    "version": "0.1.0",
    "name": "addPatientapplication",
    "group": "patient_application",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/patient/:upin/application\n\n    body:\n        {\n         {\n          \"application\":\n\t                    {\n\t                    \"name\": \"NFS 2015\",\n                     \"dateRegistered\": \"02/02/2012\"\n\t                    }\n        }\n       }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the patient application.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dateRegistered",
            "description": "<p>dateRegistered of the patient application.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"ok\": 1,\n\"nModified\": 1,\n \"n\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientapplicationError",
            "description": "<p>Unable to create new patient application.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientapplicationError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_application"
  },
  {
    "type": "get",
    "url": "/patient/:upin/application",
    "title": "get patient application information",
    "version": "0.1.0",
    "name": "getPatientapplication",
    "group": "patient_application",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateDiagnosed",
            "description": "<p>dateDiagnosed of the patient application.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application",
            "description": "<p>application of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>application updated date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"applications\": [\n    {\n     \"name\": \"NFS 2015\",\n     \"dateRegistered\": \"02/02/2012\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_application",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/appointment",
    "title": "Create a new patient appointment",
    "version": "0.1.0",
    "name": "addPatientappointment",
    "group": "patient_appointment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/appointment\n\nbody:\n    {\n     {\n         \"appointment\": {\n         \"CanIAddAnything\": \"Yes\"\n     }\n\n     }\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CanIAddAnything",
            "description": "<p>CanIAddAnything of the patient appointment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n  \"ok\": 1,\n  \"nModified\": 1,\n  \"n\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientappointmentError",
            "description": "<p>Unable to create new patient appointment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientappointmentError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_appointment"
  },
  {
    "type": "get",
    "url": "/patient/:upin/appointment",
    "title": "get patient appointment information",
    "version": "0.1.0",
    "name": "getPatientappointment",
    "group": "patient_appointment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CanIAddAnything",
            "description": "<p>CanIAddAnything of the patient appointment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>appointment updated date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"err\": false,\n       \"result\": {\n          \"appointments\":[\n\t                      {\n                         \"CanIAddAnything\": \"Yes\",\n                         \"id\": \"38814471-b4b1-e4fa-7b7a-da9f25858ef0\",\n                         \"UpdatedOn\": \"2016-11-11T13:07:23.395Z\"\n                       }\n                        ]\n                  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_appointment",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/patient/:upin/appointment",
    "title": "Change patient appointment",
    "version": "0.1.0",
    "name": "updatePatientappointment",
    "group": "patient_appointment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/appointment\n\nbody:\n    {\n     {\n         \"appointment\": {\n         \"CanIAddAnything\": \"Yes\"\n     }\n\n     }\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CanIAddAnything",
            "description": "<p>CanIAddAnything of the patient appointment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_appointment",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/assist",
    "title": "Create a new patient assist",
    "version": "0.1.0",
    "name": "addPatientassist",
    "group": "patient_assist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/assist\n\nbody:\n    {\n     {\n         \"assist\": {\n         \"CanIAddAnything\": \"Yes\"\n     }\n\n     }\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CanIAddAnything",
            "description": "<p>CanIAddAnything of the patient assist.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n  \"ok\": 1,\n  \"nModified\": 1,\n  \"n\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientassistError",
            "description": "<p>Unable to create new patient assist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientassistError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_assist"
  },
  {
    "type": "get",
    "url": "/patient/:upin/assist",
    "title": "get patient assist information",
    "version": "0.1.0",
    "name": "getPatientassist",
    "group": "patient_assist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CanIAddAnything",
            "description": "<p>CanIAddAnything of the patient assist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"err\": false,\n       \"result\": {\n          \"assists\":[\n\t                      {\n                         \"CanIAddAnything\": \"Yes\",\n                       }\n                        ]\n                  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_assist",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/demographic",
    "title": "Create New Demographic",
    "version": "0.1.0",
    "name": "createNewDemographic",
    "group": "patient_demographic",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/patient/:upin/demographic\n\nbody:\n{\n  \"demographic\": {\n                    \"address\": {\n                                 \"addressType\": \"home\",\n                                 \"address1\": \"First Floor Unit 330, Centennial Park \",\n                                 \"address2\": \"First Floor Unit 330, Centennial Park \",\n                                 \"city\": \"Centennial Avenue\",\n                                 \"state\": \"Elstree, Hertfordshire\",\n                                 \"zip_code\": \"SL6 4FJ\"\n                               },\n                       \"phone\":{\n                                 \"phoneType\": \"mobile\",\n                                 \"isPrimary\": \"true\",\n                                 \"phoneNumber\": \"+44-843-354-5555\"\n                               },\n                       \"email\":{\n                                 \"emailType\": \"email\",\n                                 \"emailAddress\": \"xyz@gmail.com\",\n                                 \"isPrimary\": \"true\"\n                                }\n                   }\n }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressType",
            "description": "<p>addressType of the patient addresstype .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address1",
            "description": "<p>address1 of the patient current address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address2",
            "description": "<p>address2 of the patient perment address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of care of patient city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>state of the patient state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip_code",
            "description": "<p>zip_code of the patient zip_code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneType",
            "description": "<p>phoneType of the patient phoneType.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPrimary",
            "description": "<p>isPrimary of care of patient phone number is primary or not .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phoneNumber of the patient phone Number  .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailType",
            "description": "<p>emailType of the patient email type</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>emailAddress of the patient email Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n  \"ok\": 1,\n  \"nModified\": 1,\n  \"n\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientphysicianError",
            "description": "<p>Unable to create new patient physician.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientphysicianError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_demographic"
  },
  {
    "type": "get",
    "url": "/patient/:upin/demographic",
    "title": "get patient demographic information",
    "version": "0.1.0",
    "name": "getDemographic",
    "group": "patient_demographic",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressType",
            "description": "<p>addressType of the patient addresstype .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address1",
            "description": "<p>address1 of the patient current address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address2",
            "description": "<p>address2 of the patient perment address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of care of patient city.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>state of the patient state.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zip_code",
            "description": "<p>zip_code of the patient zip_code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneType",
            "description": "<p>phoneType of the patient phoneType.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isPrimary",
            "description": "<p>isPrimary of care of patient phone number is primary or not .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phoneNumber of the patient phone Number  .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailType",
            "description": "<p>emailType of the patient email type</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>emailAddress of the patient email Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UpdatedOn",
            "description": "<p>UpdatedOn it shows updated date of the record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"err\": false,\n   \"result\": {\n       \"demographics\": [\n           {\n               \"address\": {\n                   \"addressType\": \"home\",\n                   \"address1\": \"304 Samrat swasitk\",\n                   \"address2\": \"401 sai complex \",\n                   \"city\": \"Pune\",\n                   \"state\": \"Maharashtra\",\n                   \"zip_code\": \"411041\"\n               },\n               \"phone\": {\n                   \"phoneType\": \"mobile\",\n                   \"isPrimary\": \"true\",\n                   \"phoneNumber\": \"8802492125\"\n               },\n               \"email\": {\n                   \"emailType\": \"email\",\n                   \"emailAddress\": \"xyz@gmail.com\",\n                   \"isPrimary\": \"true\"\n               },\n               \"id\": \"ef857027-c2f2-1ed0-e73c-c8614f1ebe94\",\n               \"UpdatedOn\": \"2016-11-21T09:38:15.785Z\"\n           },\n           {\n               \"address\": {\n                   \"addressType\": \"home\",\n                   \"address1\": \"First Floor Unit 330, Centennial Park \",\n                   \"address2\": \"First Floor Unit 330, Centennial Park \",\n                   \"city\": \"Centennial Avenue\",\n                   \"state\": \"Elstree, Hertfordshire\",\n                   \"zip_code\": \"SL6 4FJ\"\n               },\n               \"phone\": {\n                   \"phoneType\": \"mobile\",\n                   \"isPrimary\": \"true\",\n                   \"phoneNumber\": \"+44-843-354-5555\"\n               },\n               \"email\": {\n                   \"emailType\": \"email\",\n                   \"emailAddress\": \"xyz@gmail.com\",\n                   \"isPrimary\": \"true\"\n               },\n               \"UpdatedOn\": \"2016-11-21T10:36:50.845Z\"\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_demographic",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/patient/:upin/demographic",
    "title": "Change Patient Demographic",
    "version": "0.1.0",
    "name": "updateDemographic",
    "group": "patient_demographic",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/patient/:upin/demographic\n\n    body:\n{\n  \"demographic\": {\n                    \"address\": {\n                                 \"addressType\": \"home\",\n                                 \"address1\": \"First Floor Unit 400, Centennial Park \",\n                                 \"address2\": \"First Floor Unit 400, Centennial Park \",\n                                 \"city\": \"Centennial Avenue\",\n                                 \"state\": \"Elstree, Hertfordshire\",\n                                 \"zip_code\": \"SL6 4FJ\"\n                               },\n                       \"phone\":{\n                                 \"phoneType\": \"mobile\",\n                                 \"isPrimary\": \"true\",\n                                 \"phoneNumber\": \"+44-843-354-5555\"\n                               },\n                       \"email\":{\n                                 \"emailType\": \"email\",\n                                 \"emailAddress\": \"xyz@gmail.com\",\n                                 \"isPrimary\": \"true\"\n                                }\n                   }\n }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressType",
            "description": "<p>addressType of the patient addresstype .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address1",
            "description": "<p>address1 of the patient current address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address2",
            "description": "<p>address2 of the patient perment address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of care of patient city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>state of the patient state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip_code",
            "description": "<p>zip_code of the patient zip_code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneType",
            "description": "<p>phoneType of the patient phoneType.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPrimary",
            "description": "<p>isPrimary of care of patient phone number is primary or not .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phoneNumber of the patient phone Number  .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailType",
            "description": "<p>emailType of the patient email type</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>emailAddress of the patient email Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_demographic",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/employment",
    "title": "Create a new patient employment",
    "version": "0.1.0",
    "name": "addPatientemployment",
    "group": "patient_employment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/employment\n\nbody:\n    {\n     {\n         \"employment\": {\n         \"CanIAddAnything\": \"Yes\"\n     }\n\n     }\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CanIAddAnything",
            "description": "<p>CanIAddAnything of the patient employment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n  \"ok\": 1,\n  \"nModified\": 1,\n  \"n\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientemploymentError",
            "description": "<p>Unable to create new patient employment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientemploymentError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_employment"
  },
  {
    "type": "get",
    "url": "/patient/:upin/employment",
    "title": "get patient employment information",
    "version": "0.1.0",
    "name": "getPatientemployment",
    "group": "patient_employment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the patient employment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient employment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>employment updated date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"err\": false,\n\"result\": {\n  \"employment\": [\n    {\n      \"name\": \"permanent\",\n      \"id\": \"a026806d-44f2-c7e2-367a-249c505d178e\",\n      \"UpdatedOn\": \"2016-11-21T09:48:23.312Z\"\n    }\n  ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_employment",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/patient/:upin/employment",
    "title": "Change patient employment",
    "version": "0.1.0",
    "name": "updatePatientemployment",
    "group": "patient_employment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/employment\n\nbody:\n    {\n     {\n         \"employment\": {\n         \"name\": \"permanent\"\n     }\n\n     }\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the patient employment.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_employment",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/insurance",
    "title": "Create a new patient insurance",
    "version": "0.1.0",
    "name": "addPatientinsurance",
    "group": "patient_insurance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/insurance\n\nbody:\n    {\n     {\n         \"insurance\": {\n         \"insuranceCarrier\": \"xyz\",\n         \"isCurrent\":true,\n         \"groupID\":1\n     }\n     }\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "insuranceCarrier",
            "description": "<p>insuranceCarrier of the patient insurance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isCurrent",
            "description": "<p>isCurrent of the patient insurance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "groupID",
            "description": "<p>groupID of the patient insurance.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n  \"ok\": 1,\n  \"nModified\": 1,\n  \"n\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientinsuranceError",
            "description": "<p>Unable to create new patient insurance.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientinsuranceError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_insurance"
  },
  {
    "type": "get",
    "url": "/patient/:upin/insurance",
    "title": "get patient insurance information",
    "version": "0.1.0",
    "name": "getPatientinsurance",
    "group": "patient_insurance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "insuranceCarrier",
            "description": "<p>insuranceCarrier of the patient insurance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isCurrent",
            "description": "<p>isCurrent of the patient insurance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "groupID",
            "description": "<p>groupID of the patient insurance.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the patient insurance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>insurance updated date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"err\": false,\n\"result\": {\n  \"insurance\": [\n    {\n      \"insuranceCarrier\": \"xyz\",\n      \"isCurrent\": true,\n      \"groupID\": 1,\n      \"id\": \"e25e8008-2b14-e820-101c-07146a704c06\",\n      \"UpdatedOn\": \"2016-11-21T10:09:31.942Z\"\n    }\n  ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_insurance",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/patient/:upin/insurance",
    "title": "Change patient insurance",
    "version": "0.1.0",
    "name": "updatePatientinsurance",
    "group": "patient_insurance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/insurance\n\nbody:\n    {\n     {\n         \"insurance\": {\n         \"insuranceCarrier\": \"xyz\",\n         \"isCurrent\":true,\n         \"groupID\":1\n     }\n     }\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "insuranceCarrier",
            "description": "<p>insuranceCarrier of the patient insurance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isCurrent",
            "description": "<p>isCurrent of the patient insurance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "groupID",
            "description": "<p>groupID of the patient insurance.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_insurance",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/medicine",
    "title": "Create a new patient medicine",
    "version": "0.1.0",
    "name": "addPatientmedicine",
    "group": "patient_medicine",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/patient/:upin/medicine\n\n    body:\n     {\n\t  \"medicine\":\n\t  {\n\t\t\"name\":\"iodine\",\n\t\t\"isCurrent\":true,\n\t\t\"dosage\":\"1\",\n\t\t\"startDate\":\"02/09/1993\",\n\t\t\"endDate\":\"02/09/1993\",\n\t\t\"instructions\":\"take after lunch\",\n\t\t\"medicationType\":\"tablet\",\n\t\t\"frequency\":\"2 times\"\n\t  }\n  }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isCurrent",
            "description": "<p>isCurrent of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>dosage of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Start",
            "description": "<p>date of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "End",
            "description": "<p>Date of the pateint medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>instructions of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "medicationType",
            "description": "<p>medicationType of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>frequency of patient medicine.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n  \"ok\": 1,\n  \"nModified\": 1,\n  \"n\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientmedicineError",
            "description": "<p>Unable to create new patient medicine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientmedicineError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_medicine"
  },
  {
    "type": "get",
    "url": "/patient/:upin/medicine",
    "title": "get patient medicine information",
    "version": "0.1.0",
    "name": "getPatientmedicine",
    "group": "patient_medicine",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the patient medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isCurrent",
            "description": "<p>isCurrent of the patient medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>dosage of the patient medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Start",
            "description": "<p>date of the patient medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "End",
            "description": "<p>Date of the pateint medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>instructions of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medicationType",
            "description": "<p>medicationType of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>frequency of patient medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medicineCarrier",
            "description": "<p>medicineCarrier of the patient medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "groupID",
            "description": "<p>groupID of the patient medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>id of the patient medicine.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UpdatedOn",
            "description": "<p>update date of the pateint medicine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"err\": false,\n\"result\": {\n  \"medicines\": [\n    {\n      \"name\": \"iodine\",\n      \"isCurrent\": true,\n      \"dosage\": \"1\",\n      \"startDate\": \"02/09/1993\",\n      \"endDate\": \"02/09/1993\",\n      \"instructions\": \"take after lunch\",\n      \"medicationType\": \"tablet\",\n      \"frequency\": \"2 times\",\n      \"id\": \"44927cf7-c460-64fc-b52e-8191d3189f05\",\n      \"UpdatedOn\": \"2016-11-21T10:51:21.375Z\"\n    }\n   ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_medicine",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/patient/:upin/medicine",
    "title": "Change patient medicine",
    "version": "0.1.0",
    "name": "updatePatientmedicine",
    "group": "patient_medicine",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/patient/:upin/medicine\n\n    body:\n     {\n\t  \"medicine\":\n\t  {\n\t\t\"name\":\"iodine\",\n\t\t\"isCurrent\":true,\n\t\t\"dosage\":\"1\",\n\t\t\"startDate\":\"02/09/1993\",\n\t\t\"endDate\":\"02/09/1993\",\n\t\t\"instructions\":\"take after lunch\",\n\t\t\"medicationType\":\"tablet\",\n\t\t\"frequency\":\"2 times\"\n\t  }\n  }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isCurrent",
            "description": "<p>isCurrent of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dosage",
            "description": "<p>dosage of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Start",
            "description": "<p>date of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "End",
            "description": "<p>Date of the pateint medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>instructions of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "medicationType",
            "description": "<p>medicationType of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>frequency of patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "medicineCarrier",
            "description": "<p>medicineCarrier of the patient medicine.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "groupID",
            "description": "<p>groupID of the patient medicine.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_medicine",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/physician",
    "title": "Create a new patient physician",
    "version": "0.1.0",
    "name": "addPatientphysician",
    "group": "patient_physician",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/patient/:upin/physician\n\n    body:\n        {\n         {\n          \"physician\":\n\t                    {\n\t                     \"name\": \"Trevor\",\n                      \"title\":\"Doctor\",\n                    \t \"typeOfCare\": \"Physician\"\n\t                    }\n        }\n       }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the patient physician.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the patient physician.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeOfCare",
            "description": "<p>type of care of patient.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"ok\": 1,\n\"nModified\": 1,\n \"n\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientphysicianError",
            "description": "<p>Unable to create new patient physician.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatepatientphysicianError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_physician"
  },
  {
    "type": "get",
    "url": "/patient/:upin/physician",
    "title": "get patient physician information",
    "version": "0.1.0",
    "name": "getPatientphysician",
    "group": "patient_physician",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateDiagnosed",
            "description": "<p>dateDiagnosed of the patient physician.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "physician",
            "description": "<p>physician of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>physician updated date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"err\": false,\n       \"result\": {\n          \"physician\":[\n\t                     {\n\t                     \"name\": \"Trevor\",\n                      \"title\":\"Doctor\",\n                    \t \"typeOfCare\": \"Physician\",\n                      \"id\": \"c032880a-8fa4-f1f4-39b9-cb103018f222\"\n\t                     }\n                      ]\n                 }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/patient/:upin/physician",
    "title": "Change patient physician",
    "version": "0.1.0",
    "name": "updatePatientphysician",
    "group": "patient_physician",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/patient/:upin/physician\n\n    body:\n   {\n    {\n          \"physician\":\n\t                    {\n\t                     \"name\": \"Trevor\",\n                      \"title\":\"Doctor\",\n                    \t \"typeOfCare\": \"Physician\"\n\t                    }\n        }\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the patient physician.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the patient physician.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeOfCare",
            "description": "<p>type of care of patient.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_physician",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/patient/:upin/vitals",
    "title": "Request all vital information",
    "name": "GetVitalInformatipon",
    "group": "patient_viatls",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "morning",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n  \"vitals\": [\n    {\n      \"timeOfDay\": \"morning\",\n      \"id\": \"7cf3fb51-4ddb-2abb-fbc9-97906dae0ef5\",\n      \"UpdatedOn\": \"2016-11-21T10:24:02.007Z\"\n    }\n  ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_viatls",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/vitals",
    "title": "create new vital",
    "version": "0.1.0",
    "name": "createviatl",
    "group": "patient_viatls",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeoftheday",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/vitals\n\nbody:\n    {\n     {\n         \"vitals\": {\n         \"timeoftheday\": \"morning\",\n     }\n     }\n   }",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"err\": false,\n \"result\": {\n   \"ok\": 1,\n   \"nModified\": 1,\n   \"n\": 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateVitalError",
            "description": "<p>Unable  to create Vital.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreateVitalError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_viatls"
  },
  {
    "type": "put",
    "url": "/patient/:upin/vitals",
    "title": "Update Vital Information",
    "version": "0.1.0",
    "name": "updateVital",
    "group": "patient_viatls",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.aWNoZWFsQGdtYWlsLmNvbXN0YXJr.J1RPypwCq_JAfRq8MWPZXtZPB1arxuk23NY2QIpTtWw\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time of the day</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/vitals\n\nbody:\n    {\n     {\n         \"vitals\": {\n         \"timeoftheday\": \"morning\",\n     }\n     }\n   }",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"err\": false,\n \"result\": {\n   \"ok\": 1,\n   \"nModified\": 1,\n   \"n\": 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient_viatls",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient",
    "title": "Create a new patient",
    "version": "0.1.0",
    "name": "addPatient",
    "group": "patient",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient\n\nbody:\n    {\n     \"patient\":{\n     \"firstName\":\"Micheal\",\n     \"lastName\": \"J. Fox\",\n     \"email\": \"micheal@gmail.com\",\n     \"password\": \"stark\",\n     \"dob\": \"02/09/1992\"\n \t}\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dob",
            "description": "<p>Birthdate of patient.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":{\n              \"ok\":1,\n               \"n\":1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatepatientError",
            "description": "<p>Unable to create new patient.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatemedicineError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient"
  },
  {
    "type": "post",
    "url": "/patient/:upin/forgotpassword/email",
    "title": "patient forgotpassword send email",
    "version": "0.1.0",
    "name": "forgotpassword",
    "group": "patient",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: /patient/:upin/forgotpassword/email\nbody:\n    {\n       \"email\": \"micheal@gmail.com\",\n \t}\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>The patients upin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n \"message\": \"success\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/:upin/forgotpassword/sms",
    "title": "patient forgotpassword send sms",
    "version": "0.1.0",
    "name": "forgotpasswordSMS",
    "group": "patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>The patients upin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile number with country code of the patient.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient/:upin/forgotpassword/sms\nbody:\n    {\n    \n     \"mobile\": \"+445458345389\",\n \t}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n \"message\": \"success\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/patient:upin",
    "title": "Get patient information",
    "version": "0.1.0",
    "name": "getPatient",
    "group": "patient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>Upin of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>fiestName of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dob",
            "description": "<p>Birthdate of patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>upin of patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>date of record updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>patient is active or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp send to patient.</p>"
          },
          {
            "group": "Success 200",
            "type": "token",
            "optional": false,
            "field": "token",
            "description": "<p>token of patient.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          { \n           \"firstName\" : \"Micheal\", \n           \"lastName\" : \"J. Fox\", \n           \"email\" : \"micheal@gmail.com\", \n           \"dob\" : \"02/09/1992\", \n           \"upin\" : \"23d4ad98f4\", \n           \"updatedOn\" : ISODate(\"2016-11-19T09:54:41.049+0000\"), \n           \"isActive\" : false, \n           \"otp\" : \"494162\", \n           \"token\" : \"eyJhbGciOiJIUzI1NiJ9.bWljaGVhbEBnbWFpbC5jb21zdGFyaw.vQIqIrMT3SK4u1D4t11ljHZHa93y0vJaurWFO5m9OhE\"\n           }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/patient/login",
    "title": "Patient Login",
    "version": "0.1.0",
    "name": "loginPatient",
    "group": "patient",
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/patient/login\n\n    body:\n{\n\n  \"patient\":{\n   \"email\": \"usman123@gmail.com\",\n  \"password\": \"stark\"\n\t}\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The new patients-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n\"token\" : \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.rVRjrC1SpLNzQNpIZebHwpScR0Iv4uNF51suyupycwA\", \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailNotFoundError",
            "description": "<p>Email doesn't exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmail/PwdError",
            "description": "<p>Invalid email/password combination.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \" InvalidEmail/PwdError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient"
  },
  {
    "type": "put",
    "url": "/patient:upin",
    "title": "Change patient informaton.",
    "version": "0.1.0",
    "name": "updatePatient",
    "group": "patient",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>patients unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/patient:upin\nbody:\n    {\n     \"patient\":{\n     \"firstName\":\"Micheal\",\n     \"lastName\": \"J. Fox\",\n     \"email\": \"micheal@gmail.com\",\n     \"password\": \"stark\",\n     \"dob\": \"02/09/1992\"\n \t}\n   }",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upin",
            "description": "<p>Upin of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the patient.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dob",
            "description": "<p>Birthdate of patient.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"err\":false,\n \"result\":{\n             \"ok\":1,\n             \"nModified\":1,\n             \"n\":1\n          }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "patient",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "patientNotFound",
            "description": "<p>The <code>upin</code> of the patient was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"patientNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/slide/:id",
    "title": "Request One slide information",
    "name": "Getslide",
    "group": "slide",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The slides-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The slides-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the slide.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text of the slide.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "background_image_url",
            "description": "<p>background image url of the slide.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "static_image_url",
            "description": "<p>static image url of the slide.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>Identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slide_no",
            "description": "<p>slide number .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the slide .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":[\n             {\n                 \"_id\":\"582ef75c56e02c3730852121\",\n                 \"title\":\"yellow\",\n                 \"text\":\"Yellow\",\n                 \"param\":\"Identifies color yellow\",\n                 \"background_image_url\":\"www.google.com/asd\",\n                 \"static_image_url\":\"www.google.com/asd\",\n                 \"slide_no\":\"www.google.com/asd\",\n                 \"type\":\"Because I love it!\"\n             }\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "slide",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "slideNotFound",
            "description": "<p>The <code>id</code> of the slide was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"slideNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/slide",
    "title": "Request All slides information",
    "name": "Getslides",
    "group": "slide",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The slides-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the slide.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text of the slide.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "background_image_url",
            "description": "<p>background image url of the slide.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "static_image_url",
            "description": "<p>static image url of the slide.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>Identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slide_no",
            "description": "<p>slide number .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the slide .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":[\n             {\n                 \"_id\":\"582ef75c56e02c3730852121\",\n                 \"title\":\"yellow\",\n                 \"text\":\"Yellow\",\n                 \"param\":\"Identifies color yellow\",\n                 \"background_image_url\":\"www.google.com/asd\",\n                 \"static_image_url\":\"www.google.com/asd\",\n                 \"slide_no\":\"www.google.com/asd\",\n                 \"type\":\"Because I love it!\"\n             }\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "slide"
  },
  {
    "type": "put",
    "url": "/slide",
    "title": "Change slides information",
    "name": "Updateslide",
    "group": "slide",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/slide\n\n    body:\n        {\n  \"slide\": {\n    \"_id\" : \"582ef75c56e02c3730852121\", \n      \"title\": \"Red\",\n      \"text\": \"Red\",\n      \"param\": \"Identifies color red\",\n      \"background_image_url\": \"www.google.com/asd\",\n      \"static_image_url\": \"www.google.com/asd\",\n      \"slide_no\": \"www.google.com/asd\",\n      \"type\": \"Because I love it!\"\n  }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The slides-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the slide.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text of the slide.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "background_image_url",
            "description": "<p>background image url of the slide.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "static_image_url",
            "description": "<p>static image url of the slide.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>Identification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slide_no",
            "description": "<p>slide number .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the slide .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"err\":false,\n \"result\":{\n             \"ok\":1,\n             \"nModified\":1,\n             \"n\":1\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "slide",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "slideNotFound",
            "description": "<p>The <code>id</code> of the slide was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"slideNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/slide",
    "title": "Create a new slide",
    "version": "0.1.0",
    "name": "addslide",
    "group": "slide",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/slide\n\n    body:\n        {\n  \"slide\": {\n      \"title\": \"Red\",\n      \"text\": \"Red\",\n      \"param\": \"Identifies color red\",\n      \"background_image_url\": \"www.google.com/asd\",\n      \"static_image_url\": \"www.google.com/asd\",\n      \"slide_no\": \"www.google.com/asd\",\n      \"type\": \"Because I love it!\"\n  }\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the slide.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text of the slide.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "background_image_url",
            "description": "<p>background image url of the slide.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "static_image_url",
            "description": "<p>static image url of the slide.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slide_no",
            "description": "<p>slide number .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the slide .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":{\n              \"ok\":1,\n               \"n\":1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateSlideError",
            "description": "<p>Unable to create new slide.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreateSlideError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "slide"
  },
  {
    "type": "post",
    "url": "/user/:id/Changepassword'",
    "title": "user Change Password",
    "version": "0.1.0",
    "name": "ChangePassword",
    "group": "user",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/:id/Changepassword\nbody:\n    {\n    \n     \"otp\": \"345389\",\n     \"password\":\"12345\",\n      \"confPassword\":\"12345\"\n \t}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp got by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confPassword",
            "description": "<p>confirm Password of user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PwdNotMatchError",
            "description": "<p>Password and confirm password do not match.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidOtpError",
            "description": "<p>Invalid OTP Presented.Please try again.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"InvalidOtpError\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":{\n\"ok\":1,\n\"nModified\":1,\n\"n\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request user information",
    "name": "Getuser",
    "group": "user",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The users email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The users name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The new users-token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>The new users-otp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"err\":false,\n \"result\":{\n    \"user\":{ \n          \"email\" : \"jimmykimmel@live.com\", \n          \"name\" : \"Jimmy\", \n          \"token\" : \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.rVRjrC1SpLNzQNpIZebHwpScR0Iv4uNF51suyupycwA\", \n          \"otp\" : \"020696\"\n           }\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "user",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"userNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "user Login",
    "version": "0.1.0",
    "name": "Loginuser",
    "group": "user",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/user/login\nbody:\n    {\n    \n     \"email\": \"xyz@gmail.com\",\n     \"password\":\"12345\",\n     \"name\":\"xyz\"\n \t}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The new users-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n\"token\" : \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.rVRjrC1SpLNzQNpIZebHwpScR0Iv4uNF51suyupycwA\", \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailNotFoundError",
            "description": "<p>Email doesn't exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmail/PwdError",
            "description": "<p>Invalid email/password combination.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \" InvalidEmail/PwdError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new user",
    "version": "0.1.0",
    "name": "adduser",
    "group": "user",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/user\n    {\n    \n     \"email\": \"xyz@gmail.com\",\n     \"password\":\"12345\",\n     \"name\":\"xyz\"\n \t}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":{\n              \"ok\":1,\n               \"n\":1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateuserError",
            "description": "<p>Unable to create new user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreateuserError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/:id/forgotpassword/email",
    "title": "user forgotpassword send email",
    "version": "0.1.0",
    "name": "forgotpassword",
    "group": "user",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/:id/forgotpassword/sms\nbody:\n    {\n    \n     \"email\": \"xyz@gmail.com\",\n \t}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n \"message\": \"success\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "user",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"userNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/:id/forgotpassword/sms",
    "title": "user forgotpassword send sms",
    "version": "0.1.0",
    "name": "forgotpasswordSMS",
    "group": "user",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://localhost/:id/forgotpassword/sms\nbody:\n    {\n    \n     \"mobile\": \"+445458345389\",\n \t}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The users-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile number with country code of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\": false,\n\"result\": {\n \"message\": \"success\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "user",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>The <code>id</code> of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"userNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/video",
    "title": "Request All video information",
    "name": "GetAllvideo",
    "group": "video",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The videos-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the video.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of video.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          {\n             \"_id\": \"58304384c852841b50943263\",\n             \"name\": \"Iodine\",\n             \"url\": \"www.google.com/video\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "video"
  },
  {
    "type": "get",
    "url": "/video/:id",
    "title": "Request One video information",
    "name": "Getvideo",
    "group": "video",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The videos-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The videos-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the video.</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of video.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"err\":false,\n\"result\":[\n          {\n             \"_id\": \"58304384c852841b50943263\",\n             \"name\": \"Iodine\",\n             \"url\": \"www.google.com/video\"\n         }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "video",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "videoNotFound",
            "description": "<p>The <code>id</code> of the video was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"videoNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/video",
    "title": "Create a new video",
    "version": "0.1.0",
    "name": "addvideo",
    "group": "video",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/video\n\nbody:\n{\n \"name\" : \"Application1\", \n \"url\" : \"www.google.com/video\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the video.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of the video.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"err\":false,\n   \"result\":{\n              \"ok\":1,\n               \"n\":1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreatevideoError",
            "description": "<p>Unable to create new video.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n  \"error\": \"CreatevideoError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "video"
  },
  {
    "type": "put",
    "url": "/video",
    "title": "Change video information",
    "version": "0.1.0",
    "name": "updatevideo",
    "group": "video",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://localhost/video\n\nbody:\n{\n    \"_id\" : \"582ef75c56e02c3730852121\", \n \"name\" : \"Application1\", \n \"url\" : \"www.google.com/video\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the video.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the video.</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "url",
            "description": "<p>url of the video.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"err\":false,\n \"result\":{\n             \"ok\":1,\n             \"nModified\":1,\n             \"n\":1\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./upin_api_docs.js",
    "groupTitle": "video",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "videoNotFound",
            "description": "<p>The <code>id</code> of the video was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"videoNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
