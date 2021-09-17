import { useRouter } from "next/router";
import styled from "styled-components";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Index = () => {
    const router = useRouter();

    return (
        <Main
            meta={
                <Meta
                    title="Next.js Boilerplate Presentation"
                    description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
                />
            }
        >
            <Wrapper>
                <Logo
                    className="animated fadeIn"
                    src={`${router.basePath}/images/astral-cult-logo-white.png`}
                    alt="Astral Cult logo"
                />

                <div className="footer">
                    <div className="social animated fadeInUp">
                        <a href="https://www.instagram.com/astralcult/" target="_blank" rel="noopener">
                            <img src="images/social/instagram.svg" />
                        </a>
                        <a href="https://www.facebook.com/astralcult/" target="_blank" rel="noopener">
                            <img src="images/social/facebook.svg" />
                        </a>
                        <a
                            href="https://itunes.apple.com/us/artist/astral-cult/id606702053?ign-mpt=uo%3D4"
                            target="_blank"
                            rel="noopener"
                        >
                            <img src="images/social/apple.svg" />
                        </a>
                        <a href="https://open.spotify.com/artist/5SCH6XvdB7C4uUx56ajcEJ" target="_blank" rel="noopener">
                            <img src="images/social/spotify.svg" />
                        </a>
                    </div>
                </div>
            </Wrapper>
        </Main>
    );
};

const Wrapper = styled.div`
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const Logo = styled.img`
    max-width: 40%;
    animation-delay: 200ms;
    animation-duration: 1s;
`;

export default Index;
