import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>about</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                blog
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #282828;
              // background-color: #000000;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #ff0090;
              text-decoration: underline;
            }

            @media (min-width: 769px) {
              .container {
                width: 20vw;
                display: block;
              }
              ul {
                opacity: 1;
                width: 20vw;
                top: auto;
                display: block;
                border-right: 1px solid #606060;
                border-top: 1px solid #606060;
                box-shadow: inset 0 0 5px #606060;
                border-radius: 0 10px 0 0;
                transform: translateY(0);
                padding: 5vh 0;
              }
              li {
                font-size: 1.5rem;
                padding: 0 3vw;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
