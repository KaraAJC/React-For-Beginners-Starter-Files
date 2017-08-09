# Kara's Notes

Here's a list of what I've learned so far, and things I've been curious about, to review later!

*note: I've also commented up a lot of the work I've done as I go through lessons, so that's also useful info!*

## Environment Needs:
- Node
- Code Editor package `babel` 
- Chrome React Tools extension

## Components:
components are chunks of reuseable code that are setup to do lots of things, default to prepare a chunk of code to be rendered to the main JS file. 
if ALL the component is doing is rendering something to the page, and there are no other functions, this would be called a "Stateless Functional Component"

You can look at components that people have made with `React Dev Tools` by navigating to a react-built side and going to the `React` tab. from there, you can inspect a component, often shown by it's `<ComponentName\>` tag

Components always have the following code:
```js 
    import React from 'react';
    import OtherComponent from 'path-to-component';

    class ComponentName extends React.component {
        render() {
            return (
                // JSX here
                <OtherComponent />
            )
        }
    }

    export default ComponentName;
```


## JSX

Notes to know about JSX using the above component info:
- one parent element per component
- use {/* comment */} format inside return & must be nested
- element attribute "class" must be "className"
- self-closing tags must be literally closed with />

```js 
    import React from 'react';

    class ComponentName extends React.component {
        render() {
            // you can JS comment outside the return
            return (
                <parent element className="class">
                    { /* comment: this is where JSX will live */ }
                    <self closing element />
                </parent element>
            )
        }
    }

    export default ComponentName;
```

## Props
how to provide data!

you can pass a prop to an element attribute
```html
    <header tagline="catch of the day" age="23" />
```
this will show up in `react Dev Tools` as attributes, or "props" of the header component

the render function holds `this.props` where you can call 
`this.props.tagline` for the above example

to show the props value in JSX, you use {this.props.tagline}



### Cool-To-Know Notes
 
#### $r in the console

#### $0 in the console
