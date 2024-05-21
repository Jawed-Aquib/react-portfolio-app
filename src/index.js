import React from "react";
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import aquib from './images/aquib.jpeg'
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import react_logo from './images/react_logo.png'
import javascript from './images/javascript.png'
import spring_log from './images/spring_logo.png'
import './index.css'




const rootElement = document.getElementById('root')

const Header = (props) => (
  <header className="image-container">
    {console.log(props)}
   {
   props.images.map((image, index) =>
    ( 
      <ImageCard image = {image} index={index}/>
    )
   )}
  </header>
)
 const Input = (props) => (
  <input key = {props.index} type = 'text' className="text-box" placeholder={props.text}></input>
 )
 const ImageCard = ({image:[src, tooltip], index}) =>{
  return(
  <img key={index} src={src} alt={src || "image logo"} title={tooltip}></img>
  )
 }
const TextBox = (props) => (
  <div className="container">
    {
      props.placeHolders.map((text, index) =>
        <Input text = {text} index = {index}/>
    )
    }
  </div>
)


const SubscribeBox = ({data:{
  heading,
  innerContent,
  placeHolders
}}) =>{ 
  return (
  <div className="subscribe-box">
   <h1>{heading}</h1>
   <h3>{innerContent}</h3>
   <TextBox placeHolders = {placeHolders}/>
   <button className="custom-button"> Subscribe</button>
  </div>
)
}
 
// JSX element, footer
const footerStyles = {
  backgroundColor: '#61DBFB',
}
const Footer = () => (
  <footer style={footerStyles}>
    <p>Copyright 2020</p>
  </footer>
)

// JSX element, app, a container or a parent
const App = () => {
  const imageArr = [[css_logo, 'css'], [html_logo, 'html'], [react_logo, 'react'], [javascript, 'javascript'], [spring_log,'spring']];
  const data = {
    heading:'SUBSCRIBE',
    innerContent:'Sign up with your email address to get news and updates',
    placeHolders:['First Name','Last Name','Email']

  }
  return(
  
  <div>
    <Header images = {imageArr}/>
    <SubscribeBox data={data}/>
    <Footer/>
  </div>
)
}

const root = createRoot(rootElement)
root.render(<App/>, rootElement)