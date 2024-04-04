import styled from "styled-components";


const ServiceWrapper = styled.section`
    .serviceContainer{
        padding: 2rem 5vw;
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;

        .service-head{
            margin-top: 10rem;
            display: flex;
            align-items: end;
            justify-content: space-between;
            h1{
                font-size: 5vw;
                width: 20rem;

            }
            p{
                width: 50%;
                line-height: 1.5rem;
            }
        }

        .services-container{
            margin-top: 5rem;
            display: flex;
            flex-direction: column;
            gap: 5px;

            .service{
                width: 100%;
                height: 200px;
                background: red;
                display: flex;
                align-items: center;
                transition: 0.5s;
                p{
                    margin-left: 30px;
                    font-size: 2rem;
                }

                &:hover{
                    height: 300px;
                }


                &:nth-child(1){
                    background: url('src/assets/branding.jpeg');
                    background-position: center;
                    background-size: cover;

                    p{
                        color: black;
                        font-weight: 500;
                    }
                }


                &:nth-child(2){
                    background: url('src/assets/ux.png');
                    background-position: center;
                    background-size: cover;

                    p{
                        color: black;
                        font-weight: 500;
                    }
                }

                &:nth-child(3){
                    background: url('src/assets/web.png');
                    background-position: center;
                    background-size: cover;

                    p{
                        color: black;
                        font-weight: 500;
                    }
                }

                &:nth-child(4){
                    background: url('src/assets/app.png');
                    background-position: center;
                    background-size: cover;
                    p{
                        color: black;
                        font-weight: 500;
                    }
                }
            }
        }

        #book{
            padding: 0;
            margin-bottom: 2rem;
        }
    }

    @media(max-width: 768px){
        .serviceContainer{
            .service-head{
                margin-top: 5rem;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 10px;

                h1{
                    font-size: 3rem;
                }
                p{
                    width: 100%;
                }
            }
        }
    }
`

export default ServiceWrapper