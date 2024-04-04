import styled from "styled-components";

const OurworkWrapper = styled.section`
    .ourWork {
        padding: 2rem 5vw;
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;

        .ourWorkHero {
            height: 80vh;
            padding-top: 5rem;
            position: relative;

            h1{
                font-size: 2.5rem;
            }
            >p{
                margin-top: 10px;
                width: 80%;
            }

            .scrollDown{
                position: absolute;
                bottom: 0;
                right: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }
        }

        #work-section{
                padding: 0;
            }

        #process-section{
            padding: 0;
        }

        #book{
            padding: 0;
            margin-bottom: 2.5em;
        }
    }

    @media (max-height: 800px) {
        .ourWork{
            .ourWorkHero{
                height: 100vh;
            }
        }
    }
`;

export default OurworkWrapper;
