import React, {useState} from 'react'
import {Link,withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import './Nav.css'

function Nav(){
    return(
        <div className='navbar'>
            <h1>4Fun ECommerce</h1>
            <div className='navButtons'>
                <Button>
                    <Link to='/'>
                        Landing
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default withRouter(Nav)