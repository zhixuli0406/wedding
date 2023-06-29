import { Container } from '@mui/material';
const Layout = ({children}) => {
    return (
        <Container maxWidth='xs' fixed>
            {children}
        </Container>
    )
}
export default Layout;