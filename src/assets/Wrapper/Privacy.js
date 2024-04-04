import styled from "styled-components";

const PrivacyWrapper = styled.section`
    margin-top: 5rem;
    .privacyHeading{
        width: 100%;
        background: rebeccapurple;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
    }

    .privacy-container{
        padding: 2rem 5vw;

        .privacy-content{
            margin-top: 3rem;
            width: 60%;
            display: flex;
            flex-direction: column;
            gap: 50px;
            .content-one{
                
                p{
                    margin-top: 10px;
                    color: gray;
                }
            }
        }
    }

    @media(max-width: 768px){
        .privacy-container{
            .privacy-content{
                width: 100%;
            }
        }
    }
`
export default PrivacyWrapper