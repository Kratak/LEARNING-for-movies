import React from 'react'
import styled, { ThemeProvider} from 'styled-components'

import  { HTMLglob } from '../styles/globalStyles'
import  { theme } from '../styles/theme'

const Wrapper = styled.div`
margin: 0px auto;
text-align: center;
display: flex;

background-color: ${({theme}) => theme.netlix.grey} ;

width: 600px;
height: 80vh;
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <Wrapper>
            <HTMLglob />
                {children}
        </Wrapper>
    </ThemeProvider>
)

export {Layout}