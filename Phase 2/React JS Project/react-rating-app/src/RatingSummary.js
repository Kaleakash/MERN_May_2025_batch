function RatingSummary(props) {


    return(
        <div>
            <h4>Your rating details</h4>
            {/* // props.rating>0?<p>{props.rating}</p>:"No Rating given yet"       
    // props.rating>0?
    // "*".repeat(props.rating)
    // :"No Rating given yet"
     */}
    {props.rating > 0 ? (
                    [...Array(props.rating)].map((i) => (
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAMAAACtIJvYAAAAaVBMVEX////8AgT8AAD9fHz9hIT9lZb9jIv+/Pz9dHX+7+/9vb3+9PT9rKz+5eX+7Oz90ND8Tk78Fxf8ODj9wsL+4OD8VVX8a2v9tbX92Nj8ZWX8Skr8Pz/8RUT8JSX9p6f8oKD8XFz8LS39ycmn2QAZAAAFE0lEQVR4nO2c55biMAyFyaUECC3U0Mv7P+Q6Q2BSHNvYMvI5O/q9Ax++lixL8nY6f/ZnQdsl4SaQWLJ8cCNIbIw+N4LEejiEJ2FyBzJuiIY9EGHADdGwrqA6xtwUNUuWgioNzQtXQBQF54UDARWF5oW5gIIqMC+c51DBSTgoqA4heWFyLKiC8sJH+qSKcOVGKVm/gApKwvj0psKaG+ZtGV5UIXnhW0BBtQhFwuRUokrn3DiFzdNfqggXbpzCSgKG44XxokKFKTfQj61RpgrFC68VqAibECSsCiioziGkM9m5ShWGF9YEDCOQxpsGFWbcUJ0Z6lQhSHhpQEW4cUN1bhIqdi/M7hIqTJipJs1tFYCEewmUWKwRK9RItlQCi1fCiRSKW0KpgILqznmpWEs8kN8Ld/JtJbC2jFQtAvJ6YdK2VAJrzEa1a4WKsGej2iqollyXivVSQYUdE9W4fVsJrC4TlULAfLF4KrdxpKKKsGKhGiuhIgxZqLoaqiPHpWJ61FCxBNKVygN/sDi8UCOgoIrsPzzrX6/X/tsGL+uVrFux4dNSHZU4dZ7/svrn5Q9+f9vgDZDTrDrJFZamg8q3lpV1czeZL0y+4VuGc3HzjnvBYAGL39x6pd8kXzGgXz6nptsAlgu410Jc3GdfLmDfTKvnS97lEvciWTVuxLnpgU1bIWcScXGJINWejk03PFg4K5OxpM+ABdx0BYD56dtcSA3awtP9V7GAs1nvbvLF0KXc5lXLjl9aLnxWvBl8BUts889y+7FRAuUKNfj0zjjyfl7jaNGijq9escRZbFcf8Rm6kFrXKL2pKDIplwGDXb0lSQQ1cGshZgf65ULqXNuKqUOXCFIUZcAx6QFkEaTktr6RLVfzwmBvZCqKPJiyiLs6U3CJ6x5t+54i68KSvCjprKJQz0fx7+EUUWuXdTrLGgMVH0C5R842i4e2WF4bKJnt3vI6lNWY1DFfK49UinaShsrjXN3UPjh4HFBumRMwotr6GsqKW9vMBlSpr1mCacucgBmWr3jlIGA+3eqJSjJq9QGVpy6mYk7ACMuPhK2DHoZUXR9eaH8IFlRejsKpdWB/YfnoYmrazAZUPsZBlHMCRlQR/caKnfN2H41o5aCHIVaPnErbZjagIp8lmJ0IqED9CuyhFdCgkEo+S6CfE8BG279GSuyFmroM8opiomvlUUuoERDY/yR1Y00GRuyFA/WoFS6FNJm6lYcD5WjkSOWBYkeVst++aioLoHwFNlesQL2A8FAVlUgl7Cm+51T/+aOuYoz0TOiFrdUYYCjZKZfW2EUpYasHtlU52/vXhP8vQV/+FYpuf9JWg8OG6lIxOsgH/pX94oc8daWTUFof0vaLZ/J6OFnNSBZCTVox0v417kRUTS1gVlCUjd4gonlC1AyhYpsbnhyS85pIwoYHAldjR2rOb+JG4YVJrXKMZjRX2WyI+t9T1Izqj2Gx/+y3xvXRG5KyX1VAm7r5utq/JqnclpMYYGHjQdV5M0TuEmalfAnWp9juXuIikLA01YCzfdpdjvSf7symJe8KbTGJa22/Lw3dvXD9EhBn16db83e73/kVWFGhBQ7uWzR+JanOldvnc3Sq5l4xWexafJ/mHwPcqVqzz0ax60M+kYGLz9jSFaXj68/vdOqfxFuQv1CcH8VdI3Wp3AoB9bOcn1reV3cq+42dp3/kH5s6VW5vTmNS7ZZsU/uIPOr5en4UT/jeYv7Zf2v/AMLMQcFBFGnQAAAAAElFTkSuQmCC"
                            width="30px" 
                            height="30px" 
                            alt="star" 
                        />
                    ))
                ) : (
                    <p>No Rating given yet</p>
                )
            }
            
        </div>
    )
}

export default RatingSummary;