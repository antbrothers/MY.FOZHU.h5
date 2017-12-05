import React, {Component} from 'react'
import {Upload, Icon, message} from 'antd'
import Style from './Scss/banerManage.scss'

const Dragger = Upload.Dragger
export default class banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionObj: {
        name: 'file',
        multiple: true,
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange(info) {
          const status = info.file.status
          if (status !== 'uploading') {
            console.log(info.file, info.fileList)
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed`)
          }
        }
      }
    }
  }
  render() {
    return (
      <div className={Style.banermanager}>
        <div>banner管理</div>
        <Dragger {...this.state.actionObj}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
        </Dragger>
      </div>
    )
  }
}