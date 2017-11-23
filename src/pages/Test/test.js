import React, {Component} from 'react'

import ReactDOM from 'react-dom'
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'


const FormItem = Form.Item

class HorizontalLoginForm extends Component {
  componentDidMount() {
  }
  handleSubmit = (e) => {
  }
  render() {
    return (
      <Form layout="inline">
        <FormItem>
          <Input placeholder="用户昵称"/>
        </FormItem>
        <FormItem>
          <Input placeholder="密码"/>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">登录</Button>
        </FormItem>
      </Form>
    )
  }
}

export default HorizontalLoginForm