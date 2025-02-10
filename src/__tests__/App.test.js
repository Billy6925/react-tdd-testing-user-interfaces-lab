import { logRoles, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("returns a top-level heading with the text `Hi, I'm _______`",()=> {
    //Arrange
    render(<App/>);
    //Act
    const topLevelHeading = screen.getByRole("heading",{
        name: /hi,i'm/i,
        exact: false,
        level:1,
    })
    //Assert
    expect(topLevelHeading).toBeInTheDocument();
})

test("returns an image of yourself with alt text identifying the content of the image", ()=> {
   //Arrange
   render(<App/>);
   //Act
   const image = screen.getByRole("img", {
    name: /me/i,
    exact:false,
   }) 
  //Assert
  expect(image).toBeInTheDocument();
})
test("returns a second-level heading with the text `About Me'",()=> {
    //Arrange
    render(<App/>);
    //Act
    const secondLevelHeading = screen.getByRole("heading",{
        name: /about me/i,
        exact: false,
    })
    //Assert
    expect(secondLevelHeading).toBeInTheDocument();
   })
   test("returns a paragraph of your biography with the text `I'm a full-stack developer`",()=>{
    //Arrange
   const {container}= render(<App/>);

   logRoles(container);
    //Act
    const biography = screen.getByText(/i'm a full-stack developer/i);
    //Assert
    expect(biography).toBeInTheDocument();
   })

   test("returns github and linkedIn links",()=> {
    //Arrange
    render(<App/>);
    //Act
    const linkElement = screen.getByRole('link', {
name: /Billy6925/i,
exact:false,
name: /linkedin/i,
    })
    //Assert
    expect(linkElement).toBeInTheDocument();
   })