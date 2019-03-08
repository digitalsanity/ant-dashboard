import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Icon, Avatar, Drawer } from 'antd'
import { openEditProfile } from '../../actions/profile_actions';
import ProfileDrawer from './profileDrawer';
import MainWrapper from '../../components/UI/Elements/MainWrapper'
import EventTimeline from "../../components/utils/EventTimeline";
import { StyledCard } from "../../components/UI/Antd";
const { Meta } = StyledCard;

// class ProfileView extends Component {
//   state = {
//     isDrawerOpen: false,
//     drawerVisible: true
//   }

//   showDrawer = () => {
//     this.setState({
//       isDrawerOpen: true,
//     });
//   };
//   onClose = () => {
//     this.setState({
//       isDrawerOpen: false,
//     });
//   };
//   onDrawerClose = () => this.setState({ drawerVisible: false })
  function ProfileView (props) {
    return (
      <div>
        {props.profile.name &&
          <div>

            <div className="panel-header">
              <h3>{props.profile.name}</h3>
            </div>
            <StyledCard
              style={{ width: '100%' }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[
                <Icon onClick={() => this.showDrawer()} type="setting" />,
                <Icon type="edit" onClick={() => props.openEditProfile(props.profile)} />,
                <Icon type="tool" theme="outlined" />
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={props.profile.name}
                description={props.profile.email}
              />
            </StyledCard>
          </div>

        }
        <ProfileDrawer open={this.state.isDrawerOpen} onClose={this.onClose} user={props.profile} />
        <Drawer
          title="Multi-level drawer"
          width={820}
          closable={true}
          onClose={this.onDrawerClose}
        // visible={this.state.drawerVisible}
        >
          <EventTimeline />
        </Drawer>
      </div>
    )
  }
// }
const mapStateToProps = (state) => ({
  profile: state.profileReducer.singleProfile
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  openEditProfile
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);