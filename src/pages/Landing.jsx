import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Logo} from '../component';

function Landing() {
    return (
        <StyledWrapper>
            <nav>
                <Logo/>
            </nav>
            <div className="container page">
                <div className="info">
                    <h1> job <span>tracking</span> app</h1>
                    <p>
                        The journey doesn't end with securing a position. It continues with ongoing growth and skill development.
                        Web job seekers embark on a lifelong learning journey,
                        continuously honing their skills and staying up-to-date with the evolving industry trends.
                    </p>
                    <Link to="/register" className = "btn register-link">
                        Register
                    </Link>
                    <Link to="/login" className = "btn">
                        Login/Demo
                    </Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img"/>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;


export default Landing;