(function() {
    'use strict';

    angular.module('public').service('myCvService', myCvService);

    myCvService.$inject = ['$q', '$filter'];

    function myCvService($q, $filter) {
        //    console.log("service ... ");

        var service = this;
        var projectList = [];
        var blogList = [];

        projectList.push({
            shortName: "Customer-Portal",
            name: "Customer Portal",
            img: "images/1.jpg",
            client: "3M India",
            shortDesc: "Sales Portal Application, Developed for 3m India",
            dur: "9 months",
            description: "The System Entitled Sales Portal Application is Application Software which is Developed for 3m India, which aims at the development of Sales Order Generation and it is developed using J2EE Technology. For this we have used different tools of like front page as a front end  Jsp  and Bootstrap for developing web pages, database created by As400 and Sql Server , we have used Angular Is, Spring, JDBC Template ,HTML. This application is developed to have a Track of Sales Which is generated by 3m India, From the time Order Gets generated to till the full Invoice Received the system gets a track of all the things. This Application Works for various profile to login (like sales, customer, finance) to have a track of the Order. It can run in any Platform.",
            technologies: {
                frontEnd: "HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap 3.0",
                backEnd: "Core Java, J2EE, Spring Framework, JDBC Template",
                database: "AS400 admin, SQL"
            },
            responsibility: {
                res1: "Developed an application with responsive view for user.",
                res2: "Design and development of angular UI-Routing.",
                res3: "Development of dynamic menu.",
                res4: "Design and development of role based work flow of the project.",
                res5: "Responsible for writing a DAO layer and SERVICE layer coding."
            }

        });
        projectList.push({
            shortName: "GKSL-Academic",
            name: "GKSL Academic",
            img: 'images/2.jpg',
            client: "GKSL India Bangalore",
            shortDesc: "Complete Education Solutions for Corporation",
            dur: "5 months",
            description: "This application was developed by using Cordova. This app mainly comprises of providing complete education solutions for corporations and government organizations that need to train their staff on the latest business skills and Information Technology tools, methodologies and languages. Users can test their skills by giving mock tests provided by the app and this app works in offline also.",
            technologies: {
                frontEnd: "HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap 3.0",
                backEnd: "Cordova API",
                database: "SQL Lite"
            },
            responsibility: {
                res1: "Co-ordinated with the client and documented all the requirements regarding the project.",
                res2: "Worked on Design part",
                res3: "Worked on many Cordova API,s to access native features of Phone",
                res4: "",
                res5: ""
            }

        });
        projectList.push({
            shortName: "GlobalKnowledge-tech",
            name: "Global Knowledge Tech",
            img: 'images/4.jpg',
            client: "Global Knowledge",
            shortDesc: "A Training portal that provide a vivid & complete Training about the IBM Technologies",
            dur: "3 months",
            description: "Global Knowledge is the world's leading learning services and professional development solutions provider. Global Knowledge deliver learning solutions to support customers as they adapt to key business transformations and technological advancements that drive the way that organizations around the world differentiate themselves and thrive. Global Knowledge learning programs, whether designed for a global organization or an individual professional, help businesses close skills gaps and foster an environment of continuous talent development.",
            technologies: {
                frontEnd: "HTML5, CSS3, JavaScript, jQuery, Bootstrap 3.0",
                backEnd: "Core Java, J2EE",
                database: "My SQL"
            },
            responsibility: {
                res1: "Co-ordinated with the client and documented all the requirements regarding the project.",
                res2: "Worked on Design part",
                res3: "Design and development of role based work flow of the project.",
                res4: "",
                res5: ""
            }

        });
        projectList.push({
            shortName: "JECRC-Portal",
            name: "JECRC Portal",
            img: 'images/3.jpg',
            client: "JECRC Jaipur",
            shortDesc: "A web portal that provide a vivid & complete view about the JECRC Computer Users",
            dur: "5 months",
            description: "This application was developed by using Cordova. This app mainly comprises of providing complete education solutions for corporations and government organizations that need to train their staff on the latest business skills and Information Technology tools, methodologies and languages. Users can test their skills by giving mock tests provided by the app and this app works in offline also.",
            technologies: {
                frontEnd: "HTML5, CSS3, JavaScript, jQuery, Bootstrap 3.0",
                backEnd: "Core Java, J2EE",
                database: "My SQL"
            },
            responsibility: {
                res1: "Co-ordinated with the client and documented all the requirements regarding the project.",
                res2: "Worked on Design part",
                res3: "Design and development of role based work flow of the project.",
                res4: "",
                res5: ""
            }

        });
        blogList.push({
            shortName: 'JS-clouser',
            img: 'images/3.jpg',
            topic: 'JS Clouser',
            smalInfo: 'Understand JavaScript Closures',
            technology: 'JS',
            ques: 'What is a closure?',
            defination: 'A closure is an inner function that has access to the outer (enclosing) function’s variables - scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.',
            infoPart1: 'A clouser is a local variable for a function kept alive after the function has returned, or',
            infoPart2: 'A clouser is a stack - frame which is not deallocated. for example',
            expamples: [{
                example1:{
                line1: 'function sayHello(name){',
                line2: 'var text = \'Hello \' + name; // local variable' ,
                line3: 'var printName = function(){',
                line4: 'alert(text);' ,
                line5: '}',
                line6:'return printName;',
                line7: '}'
                },
                example2:{
                line1: 'function sayHello(name){',
                line2: 'var text = \'Hello \' + name; // local variable' ,
                line3: 'var printName = function(){',
                line4: 'alert(text);' ,
                line5: '}',
                line6:'return printName;',
                line7: '}'
                }
            }],
            infoPart3: '',
            infoPart4: '',
            infoPart5: '',
            summary: {
                heading: 'Summary of JavaScript Clouser',
                points: [{
                    point: '1',
                    info: 'Whenever you use function inside another function, a clouser is used.'
                }, {
                    point: '2',
                    info: 'When ever you use  eval()  inside function, a clouser is used. the text you eval can reference local variables of the function, and within eval you can even create new local variables by using eval(var abc = ....).',
                }, {
                    point: '3',
                    info: '......'
                }]
            }
        });

        service.getProjectList = function() {
            var deferred = $q.defer();
            deferred.resolve(projectList);

            return deferred.promise;
        };
        service.getProjectDetails = function(pname) {
            var deferred = $q.defer();
            var result = $filter('filter')(projectList, {
                shortName: pname
            });
            //  console.log("Resulltt : >> " + JSON.stringify(result));

            return result;

        };

        service.getBlogList = function() {

            var deferred = $q.defer();
            deferred.resolve(blogList);

            return deferred.promise;

        };
        service.getblogsDetails = function(bname) {
            var deferred = $q.defer();
            //    console.log("bname: " + bname);
            //  console.log("c: " + JSON.stringify(projectList));
            //  console.log("blogList[0].shortName: " + blogList[0].shortName);
            //  console.log("result: " + blogList[0].shortName == bname);

            var result = $filter('filter')(blogList, {
                shortName: bname
            });
            //  console.log("Resulltt blog : >> " + JSON.stringify(result));

            return result;
        };
    }
})();
