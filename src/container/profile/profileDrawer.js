import React, { Component } from 'react'
import { Drawer, Button } from 'antd';

class ProfileDrawer extends Component {
    render() {
        return (
            <div>
                <Drawer
                    visible={this.props.open}
                    title={this.props.user.name}
                    placement="right"
                    width={600}
                    closable={true}
                    onClose={this.props.onClose}
                >
                    hjghj
                </Drawer>
            </div>
        )
    }
}
export default ProfileDrawer;