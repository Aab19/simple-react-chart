import React, { Component } from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import HomeStyle from "./style"
import { getUsers } from "../../../store/user/actions"

import CenterSection from "./Center"
import Box from "../../components/Box/Box"
import Header from "../../components/Header/index"
import Chart from "../../components/Chart/index"
import ListHeader from "../../components/List/ListHeader"
import List from "../../components/List/index"
import Table from "../../components/Table/index"
import Button from "../../components/Button/index"
import FullLoading from "../../components/Loading/FullLoading"
import NotFound from "../error/404"

class Home extends Component {
  constructor(props) {
    super(props)
    this.filter = "get-user"
    this.getContent = this.getContent.bind(this)
  }

  componentDidMount() {
    if (!this.props.user[this.filter]) {
      this.props.dispatch(
        getUsers({
          filter: this.filter,
        })
      )
    }
  }

  getContent(val) {
    if (val && val.status === 200) {
      const data = val.result
      let chartData = []

      data.map((val, key) => {
        if (key <= 5) {
          return chartData.push(val)
        } else {
          return null
        }
      })

      return (
        <React.Fragment>
          <Header
            title="Active Data COVID-19 Recovered right now"
            number={data.length}
          />
          <Chart chartTitle="Page views per minute" data={chartData} />

          <ListHeader tabs={["Top COVID-19 Recovered", "Total"]} />
          <List content={chartData} />

          {/* <Table
            tabHeader={["Top Active Pages", "Active Users"]}
            tabList={chartData}
          /> */}

          <Button
            id="button-homepage"
            containerclass="button-container"
            customClass="button--blue"
            text="real-time report"
            caret
          />
        </React.Fragment>
      )
    } else {
      return <NotFound title="Halaman tidak ditemukan." />
    }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Codemi Home Page</title>
          <meta name="description" content="Codemi Home Page Application" />
        </Helmet>
        <HomeStyle>
          <CenterSection>
            <Box>
              {!this.props.user[this.filter] ||
              (this.props.user[this.filter] &&
                this.props.user[this.filter].in_progress) ? (
                <FullLoading />
              ) : (
                this.getContent(this.props.user[this.filter])
              )}
            </Box>
          </CenterSection>
        </HomeStyle>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.Users }
}

export default connect(mapStateToProps)(Home)
