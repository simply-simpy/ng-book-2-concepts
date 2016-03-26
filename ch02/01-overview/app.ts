import {Component} from 'angular2/core'

@Component({
    selector: "my-app",
    template: `
        <h1>What is Typescript</h1>
        <p>Typescript is a superset of (ES6) Javascript.</p>
        <p>Transpilers are used to convert Typescript to Javascript that browsers can understand.</p>
        <h2>What do we get with Typescript</h2>
            <ul>
                <li>Types
                    <ul>
                        <li>Helps when writing code because it can prevent bugs at compile time</li>
                        <li>Helps reading code because it clarifies intentions</li>
                        <li>Types are optional</li>
                        <li>Example
                            <code>
<pre>
function greetText(name: string): string {
    return "Hello " + name;
}
</pre>
                            </code>
                        </li> 
                        <li>Built-in Types
                            <ul>
                                <li><strong>String</strong>: <code>var name: string = "Scott"</code></li>
                                <li><strong>Number</strong> (All numbers are floating point): <code>var age: number = 36;</code></li>
                                <li><strong>Boolean</strong><code> var nighttime: boolean = true;</code></li>
                                <li><strong>Array</strong>(Type of objects in array must be specified also) 
                                    <code>var jobs: string[] = ['Apple', 'IBM', 'HP']</code>
                                </li>
                                <li><strong>enums</strong>
                                    <code>
<pre>
enum Role {Employee, Manager, Admin};
var role: Role = Role.Employee;

enum Role {Employee = 3, Manager, Admin};
var role: Role = Role.Employee;

enum Role {Employee = 3, Manager = 5, Admin = 7};
var role: Role = Role.Employee;

enum Role {Employee, Manager, Admin};
console.log('Roles: ', Role[0], ',', Role[1], 'and', Role[2]);
</pre>
                                    </code> 
                                </li>
                                <li><strong>Any</strong> allows it to receive any kind of value.</li>
<code>
<pre>
var something: any = 'as string';
something = 1;
something = [1, 2, 3];
</pre>
</code>
                            <li><strong>Void</strong> no type expected, usually in functions with no return value</li>
<code>
<pre>
function setName(name: string): void {
	this.name = name;
}  
</pre>                          
</code>
                            </ul>
                        </li>
                    </ul>
                    
                </li>
                <li>Classes
                <ul>
                    <li>Classes may have properties, methods, and constructors</li>
                     <ul>
                        <li>Properties: define data attached to instance of a class</li>
                        <li>
<code>
<pre>
class Person {
	first_name: string;
	last_name: string;
 	age: number;
}
</pre>
</code>                        
                       </li>
                       <li>Methods: methods are functions that run in context of an object</li>
                        <li>
<code>
<pre>
class Person {
	first_name: string;
	last_name: string;
 	age: number;
}
</pre>
</code>                        
                       </li>
                       <li>To instantiate a class we use the <code>new</code> keyword
<code>
<pre>
class Person {
	first_name: string;
	last_name: string;
	age: number;

 greet() {
	console.log("Hello", this.first_name);
  }
}

</pre>
</code>
<code>
<pre>
// declare a variable of type Person
var p: Person;

// instantiate a new Person instance
p = new Person();

// give it a first_name
p.first_name = 'Felipe';

// call the greet method
p.greet();”

</pre>
</code>
<code>
<pre>
class Person {
 	first_name: string;
	last_name: string;
	age: number;
  
        greet() {
         	console.log("Hello", this.first_name);
        }

ageInYears(years: number): number {
      return this.age + years;
			}
}
// instantiate a new Person instance
var p: Person = new Person();

// set initial age
p.age = 6;

// how old will he be in 12 years?
p.ageInYears(12);

// -> 18

</pre>
</code></li>
<li><strong>Constructors</strong> A constructor is a special method that is executed when a new instance of the class is being created. Usually, the constructor is where you perform any initial setup for new objects.
    <code>
<pre>
class Person {
    first_name: string;
    last_name: string;
    age: number;

    constructor(first_name: string, last_name: string, age: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
}

	greet() {
  	    console.log("Hello", this.first_name);
    }

 	ageInYears(years: number): number {
     	return this.age + years;
	}
}

</pre>
</code>
</li>
<li><strong>Inheritance</strong> Inheritance is a way to indicate that a class receives behaviour from a parent class.
<ul>
    <li>Inheritance is achieved through the <code>extends</code> keyword</li>

</ul>
    </li>

    
                     </ul>
                </ul>
                </li>
                <li>Language utilities
                    <ul>
                        <li>
                            Fat arrow => functions are a shorthand notation for writing functions.
<code>
<pre>
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
data.forEach( (line) => console.log(line) );
</pre>
</code> 

<code>
<pre>
var evens = [2,4,6,8];
var odds = evens.map(v => v + 1);
</pre>
</code>
<ul>
<li>One important feature of the => syntax is that it shares the same this as the surrounding code.</li>
</ul>

                         
                        </li>
                    </ul>
                   
                </li>
                <li><strong>Template Strings</strong>
                    <ol>
                        <li>Variables within strings (without being forced to concatenate with +)</li>
                        <li>Multi-line strings</li>
                    </ol>
                </li>
                 <li><strong>String interpolation (Variables in strings)</strong>

<pre>
<code>
var firstName = "Nate";
var lastName = "Murray";

// interpolate a string
// var greeting = Hello $ {firstName} $ {lastName} 

console.log(greeting);
</code> 
</pre>
                  
                </li>
            </ul>
        `
})

export class MyApp{}