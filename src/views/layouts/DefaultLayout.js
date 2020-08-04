import React, { Component, Suspense } from "react";
import { Layout, Menu, Breadcrumb, Tag } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { routes } = this.props;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        {routes.map((route, index) => {
                            return route.children ? (
                                <SubMenu
                                    key={index}
                                    icon={route.icon}
                                    title={route.name}
                                >
                                    {route.children.map((child, idx) => (
                                        <Menu.Item
                                            key={child.name + idx}
                                            icon={child.icon}
                                        >
                                            <Link to={child.path}>
                                                {child.name}
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                </SubMenu>
                            ) : (
                                <Menu.Item key={index} icon={route.icon}>
                                    <Link to={route.path}>{route.name}</Link>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    >
                        <Tag color="#2db7f5">Welcome: '{this.props.name}' </Tag>
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            {/* {this.props.children} */}
                            <Switch>
                                <Suspense fallback={<div>Loading...</div>}>
                                    {routes.map((route) =>
                                        route.children ? (
                                            route.children.map((child) => (
                                                <Route path={child.path}>
                                                    {child.component}
                                                </Route>
                                            ))
                                        ) : (
                                            <Route path={route.path}>
                                                {route.component}
                                            </Route>
                                        )
                                    )}
                                </Suspense>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

DefaultLayout.propTypes = {
    name: PropTypes.string.isRequired,
    // student: PropTypes.shape({
    //     id: PropTypes.string.isRequired,
    //     age: PropTypes.number,
    //     name: PropTypes.string.isRequired
    // })
};

function mapStateToProps(state) {
    return {
        name: state.user.name,
    };
}

export default connect(mapStateToProps)(DefaultLayout);
