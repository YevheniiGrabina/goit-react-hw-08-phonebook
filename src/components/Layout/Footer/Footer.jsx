import { Navbar, Container, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Navbar bg="dark" variant="dark">
        <Container className=" justify-content-center">
          <Nav>
            <Nav.Item>
             
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Footer;
