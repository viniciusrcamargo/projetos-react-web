import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor ? props.cor : '#000'};//cor padrão via props
    font-size: ${props => props.tamanhoFonte ? props.tamanhoFonte : '36px'};//tamanho padrão via props
    text-align: ${props => props.alinhamento ? props.alinhamento : 'center'};//alinhamento padrão via props
    // color: #EB9B00;
    margin: 0;
`