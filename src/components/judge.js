import React from 'react'
import styled, { ThemeProvider} from 'styled-components'

import  { theme } from '../styles/theme'

const Wrapper = styled.div`
/* margin: 20px auto; */
text-align: center;

display: flex;
flex-flow: row wrap;

margin: auto;
margin-top: 20px;
margin-bottom: 20px;
padding: 20px 0px;
align-items: center;
background-color: ${({theme}) => theme.netlix.magenta} ;

width: 100%;
min-height: 60%;

`
const ArrowButton = styled.button`
width: 10%;
height: 200px;

background-color: ${({theme})=> theme.netlix.foreground};

text-decoration:none;
border:none;

@media (max-width: 599px) {
   height: 25vh;
  }
`


const GreenArrow = styled(ArrowButton)`
background-color:  ${({theme})=> theme.netlix.green};
margin-right: auto;
`
const RedArrow = styled(ArrowButton)`
background-color:  ${({theme})=> theme.netlix.red};
margin-left:auto;
`
const ImageViewer = styled.div`
height: 400px;
width: 70%;

background-color:  ${({theme})=> theme.netlix.backgound};

@media (max-width: 599px) {
   height: 35vh;
  }
`

const Description = styled(ImageViewer)`
margin: 20px auto;
width:90%;

`

const Title = styled.h1`
width: 80%;
margin: 10px auto 10px 20px;
text-align: start;

background-color: yellow;
`
const Details = styled.p`

`

const Judge = () =>(
    <ThemeProvider theme={theme}>
        <Wrapper>
            <RedArrow />
            <ImageViewer>img</ImageViewer>
            <GreenArrow />
            <Description>
                <Title>
                    Titled
                </Title>
                <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam blandit mi id felis vulputate commodo. 
                Morbi ut tellus nec risus venenatis luctus. 
                Pellentesque pretium dui facilisis, molestie est aliquet, tempus nisi. 
                
                </Details>
            </Description>
            
        </Wrapper>
    </ThemeProvider>
)

export { Judge }