import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as M from 'actions/Banner'
import {Upload, Icon, message, Carousel, Modal, Button} from 'antd'
import '../Scss/banerManage.scss'
require('../Scss/banerManage.scss')
import * as Tool from '../../../../Util/HelpTool'

class banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerModal: {
        loading: false,
        visible: false,
      },
      bannerPic: {
        previewVisible: false,
        previewImage: '',
        fileList: []
      }

    }
  }
  componentDidMount() {
    this.getBannerData()
  }

  getBannerData = () => {
    var _this = this
    new Promise(function (resolve, reject) {
      var ret = _this.props.getAdvertPicList("1")
      resolve(ret)
    }).then(function (res) {
      var bannerPic = {fileList: []}
      for (var index in _this.props.dataGrid.getRes) {
        var previewParam = {
          uid: '',
          name: '',
          status: 'done',
          url: '',
          response: {}
        }
        var item = _this.props.dataGrid.getRes[index]
        previewParam.uid = item.id
        previewParam.name = item.advertPaths
        previewParam.status = 'done'
        previewParam.url = 'http://localhost:8081' + item.advertPaths
        previewParam.response = item
        bannerPic.fileList.push(previewParam)
      }
      _this.setState({bannerPic})
    })
  }

  /**
   * 编辑banner 广告
   */
  editBanner = () => {
    let bannerModal = {...this.state.bannerModal}
    bannerModal.visible = !this.state.bannerModal.visible
    this.setState({bannerModal})
  }
  /**
   * 刷新banner 广告
   */
  refreshBanner = () => {
    this.getBannerData()
  }
  handleOk = () => {
    let bannerModal = {...this.state.bannerModal}
    bannerModal.visible = !this.state.bannerModal.visible
    this.setState({bannerModal})
  }
  handleCancel = () => {
    let bannerModal = {...this.state.bannerModal}
    bannerModal.visible = !this.state.bannerModal.visible
    this.setState({bannerModal})
  }

  /**
   * 图片预览
   */
  handlePreview = (file) => {
    var bannerPic = {...this.state.bannerPic}
    bannerPic.previewImage = file.url || file.thumbUrl
    bannerPic.previewVisible = true
    this.setState({bannerPic})
  }
  /**
   * 上传图片回调
   */
  handleChange = (fileObj) => {
   if (fileObj.file.status == 'done') {
     var bannerPic = {}
     bannerPic.fileList = Tool.megerObj.extend(this.state.bannerPic.fileList, fileObj.fileList)
     this.setState({bannerPic})
   }
  }
  /**
   * 关闭图片预览窗口
   */
  handlePicCancel = () => {
    var bannerPic = {...this.state.bannerPic}
    bannerPic.previewVisible = false
    this.setState({bannerPic})
  }
  /**
   * 删除图片
   */
  handleRemove = (file) => {
    console.log(file.response.id)
    this.props.deleteAdvertPicById(file.response.id)
  }
  render() {
    const {previewVisible, previewImage, fileList} = this.state.bannerPic
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div id="banner" className="banermanager">
        <div className="add-title">
          广告位管理
          <div className="right-icon">
            <Icon type="sync" onClick={this.refreshBanner} />
            <Icon type="edit" onClick={this.editBanner} />
          </div>
        </div>
        <div className="banner-main">
          <Carousel autoplay>
            {
              this.props.dataGrid.getRes.map(function (item) {
                return <div key={item.id}>
                  <img src={"http://localhost:8081" + item.advertPaths}/>
                </div>
              })
            }
          </Carousel>
        </div>
        <Modal
          visible={this.state.bannerModal.visible}
          title="banner图片管理"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          /*footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.bannerModal.loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}*/
        >
          <div className="clearfix">
            <Upload
              action="/advert/testFileInsert"
              listType="picture-card"
              defaultFileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              onRemove = {this.handleRemove}
            >
              {
                uploadButton
              }
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handlePicCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
        </Modal>
      </div>
    )
  }
}
export default connect((state) => ({dataGrid: state.banner}), M)(banner);

