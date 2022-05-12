import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button, Modal, } from "react-bootstrap";
import '../component.css';
import { useHistory } from "react-router-dom";

function topHeadlines() {
    console.log('Top Headlines');
}

const Header = ({childToParent}) =>{

    const getInitialState = () => {
        const value = "Orange";
        return value;
    };

    const [show, setShow] = useState(false);
    const [filters, setFilters] = useState({ country: 'in', q: 'all', sources: 'everything', category: 'business', page: 1, pageSize: 20 });
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [value, setValue] = useState(getInitialState);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        setFilters({ ...filters, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(categoryNews)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result.articles);
                    childToParent(result.articles)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })

    }

    const history = useHistory();
    let arr = [];
    let counter = count;
    let categoryNews;



    if(filters.sources == 'top-headlines'){

        categoryNews = 'https://newsapi.org/v2/top-headlines?category=' + filters.category + '&apikey=57dd386f0534425199873f4c370a6aca&country='+ filters.country + '&q='+ filters.q +'&page=' + filters.page + '&pageSize=' + filters.pageSize;
    }else{
        categoryNews = 'https://newsapi.org/v2/everything?' + 'apikey=57dd386f0534425199873f4c370a6aca' + '&q='+ filters.q +'&page=' + filters.page + '&pageSize=' + filters.pageSize;
    }
    
    return (
        <div className="header-container">
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand ><img src="../../../news_icon.png" className="news-icon" 
                    onClick={() => { history.push('/dashboard')} } /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link onClick={() => { history.push('/dashboard')} }>Home</Nav.Link>
                            <Nav.Link onClick={(e) => { history.push('/dashboard') 
                            e.preventDefault()}} className="active"  >Dashboad</Nav.Link>
                            <Nav.Link onClick={(e) => { history.push('/readNow') 
                        e.preventDefault()}} className="">Readnow</Nav.Link>
                        </Nav>
                        {/* <Nav.Link onClick={()=> { history.push('/readNow')  }}><Button>Read Now</Button></Nav.Link> */}
                        <i className="fa fa-filter filter-icon" aria-hidden='true'
                            onClick={handleShow}></i>
                        <Nav.Link onClick={() => {
                            history.push('/')
                            localStorage.clear()
                        }}><Button>Logout</Button></Nav.Link>
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}search
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter News</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Country Code</label>
                            <select name="country" value={filters.country} onChange={handleChange}>
                                <option value="ae">ae</option>
                                <option value="ar">ar</option>
                                <option value="at">at</option>
                                <option value="au">au</option>
                                <option selected value="in">in</option>
                                <option value="be">be</option>
                                <option value="bg">bg</option>
                                <option value="br">br</option>
                                <option value="ca">ca</option>
                                <option value="ch">ch</option>                                                         
                                <option value="cn">cn</option>
                                <option value="co">co</option>
                                <option value="cu">cu</option>
                                <option value="cz">cz</option>
                                <option value="de">de</option>
                                <option value="eg">eg</option>
                                <option value="fr">fr</option>
                                <option value="gb">gb</option>
                                <option value="gr">gr</option>
                                <option value="hk">hk</option>
                                <option value="hu">hu</option>
                                <option value="id">id</option>
                                <option value="ie">ie</option>
                                <option value="il">il</option>
                                <option value="in">in</option>
                                <option value="it">it</option>
                                <option value="jp">jp</option>
                                <option value="kr">kr</option>
                                <option value="lt">lt</option>
                                <option value="lv">lv</option>
                                <option value="ma">ma</option>
                                <option value="mx">mx</option>
                                <option value="my">my</option>
                                <option value="ng">ng</option>
                                <option value="nl">nl</option>
                                <option value="no">no</option>
                                <option value="nz">nz</option>
                                <option value="ph">ph</option>
                                <option value="pl">pl</option>
                                <option value="pt">pt</option>
                                <option value="ro">ro</option>
                                <option value="rs">rs</option>
                                <option value="ru">ru</option>
                                <option value="sa">sa</option>
                                <option value="se">se</option>
                                <option value="sg">sg</option>
                                <option value="si">si</option>
                                <option value="sk">sk</option>
                                <option value="th">th</option>
                                <option value="tr">tr</option>
                                <option value="tw">tw</option>
                                <option value="ua">ua</option>
                                <option value="us">us</option>
                                <option value="ve">ve</option>
                                <option value="za">za</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Category</label>
                            <select name="category" value={filters.category} onChange={handleChange}>
                                <option selected value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="general">General</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Sources</label>
                            <select name="sources" value={filters.sources} onChange={handleChange}>
                                <option value="top-headlines">Top headlines</option>
                                <option selected value="everything">Everything</option>
                                <option value="sources">Sources</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label> Search Keyword:</label>
                            <input type="text" placeholder="Enter Search Text"
                                name="q" value={filters.q} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label> Page:</label>
                            <input type="text" placeholder="Enter Page Number"
                                name="page" value={filters.page} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label> Page Size:</label>
                            <input type="text" placeholder="Enter Page Size"
                                name="pageSize" value={filters.pageSize} onChange={handleChange} />
                        </div>
                        <div className="text-end">
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleClose} className="ms-4">
                                Apply
                            </Button>
                        </div>

                    </form>
                </Modal.Body>
            </Modal>

        </div >
    )
}
export default Header;