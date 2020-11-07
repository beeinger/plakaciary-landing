import React, { useState } from 'react'
import styled from "styled-components"
import ImageText from '../components/ImageText'
import { IconInput, Button } from "react-angled"
import { RiShieldKeyholeFill } from "react-icons/ri"

const Layout = styled.div`
    display: grid;
    grid-template:
        ". title ." 40vh
        ". input ." auto
        ". button ." auto
        / 20vw auto 20vw;
    row-gap: 40px;
    place-items: center;

    >div {
        grid-area: title;
    }

    >span {
        grid-area: input;
    }

    >button { 
        grid-area: button;
    }

    @media screen and (max-width: 600px) {
        grid-template:
            ". title ." 35vh
            ". input ." auto
            ". button ." auto
            / 5vw auto 5vw;
    }
`


export default function login() {
    const [value, setvalue] = useState("")

    return (
        <Layout>
            <div>
                <ImageText size="4.5em">PODAJ</ImageText>
                <ImageText size="4.5em">HASŁO</ImageText>
            </div>
            <IconInput type="password" value={value} width="40vw" icon={RiShieldKeyholeFill} onChange={(e) => setvalue(e.target.value)} />
            <Button>Zatwierdź</Button>
        </Layout>
    )
}
