import { Button, Flex } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/store";


const NavBar = () => {
      const user = useAppSelector(selectCurrentUser);
      console.log(user)

      return (

            <Flex align="center" justify="space-between" className="navbar-container">

                  {/* <Logo width={350} height={350} /> */}
                  <div>
                        <img className="logo" src="/kpilogo.png" alt="" />
                  </div>

                  <Flex align="center" gap={20}>
                        <NavLink to={"/"}>
                              <Button type="dashed">Home</Button>
                        </NavLink>
                        <NavLink to={"/about"}>
                              <Button type="dashed">About</Button>
                        </NavLink>
                        <NavLink to={"/contact"}>
                              <Button type="dashed">Contact</Button>
                        </NavLink>
                  </Flex>

                  {user ?<Link to={"/" + user!.role}><Button color="purple" variant="solid" size="large">Dashboard</Button></Link>  :
                        <Flex gap={20}>
                              <Link to="/login">

                                    <Button size="large" type="primary">Login</Button>
                              </Link>
                              <Button size="large" type="dashed">Register</Button>

                        </Flex>}
            </Flex>

      );
};

export default NavBar;