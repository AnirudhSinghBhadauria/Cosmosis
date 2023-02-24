import classes from "./styles/rightsidenav.module.scss";
import ApodSVG from "../assets/SVG-Components/ApodSVG";
import IsroSVG from "../assets/SVG-Components/IsroSVG";
import CurositySVG from "../assets/SVG-Components/CurositySVG";
import KnowYAPOD from "../assets/SVG-Components/KnowYAPOD";
import LogoSVG from "../assets/SVG-Components/LogoSVG";
import { Link, NavLink } from "react-router-dom";
import CardContent from "../components/CardContent";
import { useContext } from "react";
import { authContext } from "../store/AuthContextProvider";

const RightSideNav = () => {
  let className;
  let message;

  const {
    ifSideBarOpen,
    changeSideBarState,
    signinWithGoogle,
    signoutWithGoogle,
    user,
    profilePicture,
    loading,
  } = useContext(authContext);

  if (ifSideBarOpen === true) {
    className = `${classes.sideBarOpen}`;
  } else if (window.innerWidth <= 768 && ifSideBarOpen === false) {
    className = `${classes.sidebarVisibility} ${classes.sideBarClose}`;
  } else {
    className = `${classes.sideBarClose}`;
  }

  const sideBarCloser = () => changeSideBarState(false);

  if (!loading) {
    if (user && user.displayName)
      message = <h3>Hello, {user.displayName.split(" ")[0]} </h3>;
  } else {
    message = <h3 className={classes.skeletonLoader}>.</h3>;
  }

  const sideBar = [
    {
      key: "apod",
      to: "/apod",
      heading: "APOD",
      desc: "  Astornomical Picture of the Day. Each day a different photograph of our fascinating universe is featured.",
      color: "black",
    },
    {
      key: "k-pod",
      to: "/k-pod",
      heading: "Your APOD",
      desc: " See Astronomical Picture of the any Particular Day, Any Day, Maybe Your Birthday?",
      color: "black",
    },
    {
      key: "isro",
      to: "/isro",
      heading: "ISRO",
      desc: "The Indian Space Research Organisation is the national spaceagency of India.",
      color: "black",
    },
    {
      key: "curosity",
      to: "/curosity",
      heading: "Curosity Rover",
      desc: "Curiosity is a Car-Sized Mars rover. See What Curosity Rover clicked Today or any particular day.",
      color: "black",
    },
  ];

  return (
    <div className={`${classes.rightSideWrapper} ${className}`}>
      <aside className={classes.cardContainer}>
        <h1 className={classes.sideHeading}>
          <Link to="/" onClick={sideBarCloser}>
            COSMOSIS
          </Link>
        </h1>

        {sideBar.map(({ key, to, heading, desc, color }) => {
          return (
            <NavLink
              key={key}
              to={to}
              onClick={sideBarCloser}
              className={({ isActive }) =>
                isActive
                  ? ` ${classes.isActive} ${classes.baseClass} `
                  : `${classes.baseClass}`
              }
            >
              <section className={classes.svgContainer}>
                {key === "apod" && <ApodSVG />}
                {key === "k-pod" && <KnowYAPOD />}
                {key === "isro" && <IsroSVG />}
                {key === "curosity" && <CurositySVG />}
              </section>

              <section>
                <CardContent heading={heading} desc={desc} color={color} />
              </section>
            </NavLink>
          );
        })}

        {message}
      </aside>

      <aside className={classes.bottomContainer}>
        <section>
          <Link
            to="/"
            aria-label="Logo-Home"
            onClick={sideBarCloser}
            preventScrollReset={false}
          >
            <LogoSVG />
          </Link>
          <div
            className={
              loading ? classes.profileLoading : classes.profileContainer
            }
          >
            <img
              alt="profilePicture"
              className={classes.profile}
              src={profilePicture}
              decoding="async"
              fetchpriority="high"
              loading="eager"
            />
          </div>
        </section>

        <div className={classes.buttonContainer}>
          {!user && (
            <button
              onClick={signinWithGoogle}
              className={loading ? classes.disabled : ""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100px"
                height="100px"
              >
                <path
                  fill="#f9e65c"
                  d="M84.467,44H50v13h20.856C67.931,65.717,59.702,72,50,72c-12.15,0-22-9.85-22-22s9.85-22,22-22 c4.799,0,9.235,1.541,12.851,4.149l9.269-9.269C66.091,17.956,58.391,15,50,15c-19.33,0-35,15.67-35,35s15.67,35,35,35 s35-15.67,35-35C85,47.952,84.806,45.951,84.467,44z"
                />
                <path
                  fill="#78a2d2"
                  d="M50,57h20.856c-1.577,4.699-4.704,8.679-8.763,11.36l9.87,8.884C79.911,70.828,85,61.01,85,50 c0-2.048-0.194-4.049-0.533-6H50V57z"
                />
                <path
                  fill="#60be92"
                  d="M62.093,68.36C58.622,70.653,54.472,72,50,72c-8.997,0-16.727-5.403-20.137-13.139L18.818,65.89 C24.609,77.23,36.393,85,50,85c8.32,0,15.957-2.908,21.963-7.756L62.093,68.36z"
                />
                <path
                  fill="#f15b6c"
                  d="M29.677,41.569C32.985,33.603,40.837,28,50,28c4.799,0,9.235,1.541,12.851,4.149l9.269-9.269 C66.091,17.956,58.391,15,50,15c-13.772,0-25.681,7.958-31.394,19.524L29.677,41.569z"
                />
                <path
                  fill="#1f212b"
                  d="M50,86c-19.851,0-36-16.149-36-36s16.149-36,36-36c8.271,0,16.353,2.878,22.753,8.105 c0.219,0.179,0.352,0.442,0.366,0.724c0.014,0.282-0.092,0.558-0.292,0.757l-9.269,9.269c-0.347,0.347-0.895,0.391-1.292,0.104 C58.675,30.369,54.433,29,50,29c-11.579,0-21,9.42-21,21s9.421,21,21,21c8.563,0,16.196-5.168,19.417-13H50c-0.553,0-1-0.448-1-1V44 c0-0.552,0.447-1,1-1h34.467c0.486,0,0.902,0.35,0.985,0.829C85.815,45.922,86,47.999,86,50C86,69.851,69.851,86,50,86z M50,16 c-18.748,0-34,15.252-34,34s15.252,34,34,34s34-15.252,34-34c0-1.624-0.129-3.302-0.384-5H51v11h19.856 c0.322,0,0.624,0.155,0.812,0.416c0.188,0.261,0.239,0.597,0.137,0.902C68.657,66.698,59.895,73,50,73c-12.683,0-23-10.318-23-23 s10.317-23,23-23c4.569,0,8.954,1.329,12.735,3.851l7.883-7.883C64.72,18.467,57.442,16,50,16z"
                />
                <path
                  fill="#1f212b"
                  d="M71.5,78c-0.119,0-0.239-0.042-0.335-0.128l-4-3.6c-0.205-0.185-0.222-0.501-0.037-0.706 c0.187-0.205,0.502-0.221,0.707-0.037l4,3.6c0.205,0.185,0.222,0.501,0.037,0.706C71.772,77.944,71.637,78,71.5,78z"
                />
                <path
                  fill="#1f212b"
                  d="M65.5,72.6c-0.119,0-0.239-0.042-0.335-0.128l-1.777-1.6c-0.205-0.185-0.222-0.501-0.037-0.706 c0.187-0.205,0.502-0.221,0.707-0.037l1.777,1.6c0.205,0.185,0.222,0.501,0.037,0.706C65.772,72.544,65.637,72.6,65.5,72.6z"
                />
                <path
                  fill="#1f212b"
                  d="M27.929,60c-0.165,0-0.326-0.082-0.422-0.231c-0.148-0.233-0.079-0.542,0.153-0.69l1.571-1 c0.231-0.146,0.541-0.08,0.69,0.153c0.148,0.233,0.079,0.542-0.153,0.69l-1.571,1C28.114,59.975,28.021,60,27.929,60z"
                />
                <path
                  fill="#1f212b"
                  d="M23.5,62.818c-0.165,0-0.326-0.082-0.422-0.231c-0.148-0.233-0.079-0.542,0.153-0.69l2-1.273 c0.231-0.146,0.541-0.081,0.69,0.153c0.148,0.233,0.079,0.542-0.153,0.69l-2,1.273C23.686,62.793,23.593,62.818,23.5,62.818z"
                />
                <path
                  fill="#1f212b"
                  d="M18.5,66c-0.165,0-0.326-0.082-0.422-0.231c-0.148-0.233-0.079-0.542,0.153-0.69l3-1.909 c0.23-0.146,0.541-0.08,0.69,0.153c0.148,0.233,0.079,0.542-0.153,0.69l-3,1.909C18.686,65.975,18.593,66,18.5,66z"
                />
                <path
                  fill="#1f212b"
                  d="M24.5,38.182c-0.093,0-0.186-0.025-0.269-0.078l-5-3.182c-0.232-0.148-0.302-0.458-0.153-0.69 c0.149-0.233,0.46-0.299,0.69-0.153l5,3.182c0.232,0.148,0.302,0.458,0.153,0.69C24.826,38.1,24.665,38.182,24.5,38.182z"
                />
                <path
                  fill="#1f212b"
                  d="M27.5,40.091c-0.093,0-0.186-0.025-0.269-0.078l-1-0.636c-0.232-0.148-0.302-0.458-0.153-0.69 c0.15-0.233,0.46-0.299,0.69-0.153l1,0.636c0.232,0.148,0.302,0.458,0.153,0.69C27.826,40.009,27.665,40.091,27.5,40.091z"
                />
              </svg>
              <h1>{loading ? "Logging In" : "Login"}</h1>
            </button>
          )}
          {user && (
            <button onClick={signoutWithGoogle}>
              <h1>Logout</h1>
            </button>
          )}
        </div>
      </aside>
    </div>
  );
};

export default RightSideNav;
