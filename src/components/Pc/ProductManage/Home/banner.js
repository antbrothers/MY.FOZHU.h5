import React, {Component} from 'react'
import {Upload, Icon, message, Carousel, Modal, Button} from 'antd'
import Style from '../Scss/banerManage.scss'
import * as Tool from '../../../../Util/HelpTool'

export default class banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerItems: [
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
          id: 11351
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
          id: 11372
        },
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
          id: 11378
        },
        {
          linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
          id: 11375
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
          id: 11287
        }
      ],
      bannerModal: {
        loading: false,
        visible: false,
      },
      bannerPic: {
        previewVisible: false,
        previewImage: '',
        fileList: [
          {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }
        ]
      }

    }
  }

  /**
   * 编辑banner 广告
   */
  editBanner = () => {
    let bannerModal = {...this.state.bannerModal}
    bannerModal.visible = !this.state.bannerModal.visible
    this.setState({bannerModal})
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
     bannerPic.fileList = Tool.megerObj.extend(this.state.bannerPic.fileList, fileObj.fileList, true)
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
    console.log(file.response.data.id)


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
            <Icon type="sync" />
            <Icon type="edit" onClick={this.editBanner} />
          </div>
        </div>
        <div className="banner-main">
          <Carousel autoplay>
            {
              this.state.bannerItems.map(function (item) {
                return <div key={item.id}>
                  <img src={item.picUrl}/>
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
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.bannerModal.loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
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
             {/* {fileList.length >= 3 ? null : uploadButton}*/}
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