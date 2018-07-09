import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import './dashboard.css';
const ButtonGroup = Button.Group;

class DashboardHeader extends Component {
    render() {
        return (
            <div className="dashboard-header">
                <ButtonGroup>
                    <Button>1W</Button>
                    <Button>4W</Button>
                    <Button>1Y</Button>
                    <Button>Mtd</Button>
                    <Button>Qtd</Button>
                    <Button>Ytd</Button>
                    <Button>All</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default DashboardHeader;