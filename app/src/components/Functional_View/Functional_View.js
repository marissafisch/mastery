import React from 'react';
import { Link } from 'react-router-dom';


export default function (props) {
    return (
        <section className="App">
            <h1>Functional Component View</h1>
            <Link to="/"><button>Home</button></Link>
            <Link to="/functional_view/nested">Nested</Link>
            <button>Hello</button>
            {props.children}
        </section>
    );
}