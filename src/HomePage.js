import React from 'react';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="HomePage">
            <p>Schlicht</p>
            <Link to="/test_React_app/homepagetwo">homepagetwo</Link>
        </div>
    );
}

export default HomePage;