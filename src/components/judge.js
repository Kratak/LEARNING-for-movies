import React from 'react'
import styled, { ThemeProvider} from 'styled-components'

import  { theme } from '../styles/theme'

const Wrapper = styled.div`
/* margin: 20px auto; */
text-align: center;
/* display: flex; */
margin: auto;
margin-top: 20px;

 background-color: ${({theme}) => theme.netlix.red} ;

width: 80%;
height: 80%;
`

const Judge = () =>(
    <ThemeProvider theme={theme}>
        <Wrapper>
            
        </Wrapper>
    </ThemeProvider>
)

export { Judge }