import React from 'react';
import styles from './index.scss';
import ContactPost from '../../api/contact/post';

import Button from '../../components/button';
import Form from '../../components/form';
import Icon from '../../components/icon';
import Input from '../../components/input';
import Textarea from '../../components/textarea';


const $ = window.$;


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    const that = this;
  }
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h1>Contact</h1>
          <p>For inquiries about my availability for contract work, please get in touch with me. Be sure to include the important stuff — tell me about your project, your budget, and your timeline so that we can figure out the right thing.</p>
          <Form method={ ContactPost } className="row text-center">
            <div className="row text-center">
              <div className="col-md-6 pr-10">
                <Input type="text" title="Your name" name={'name'} validator={'required'} errors={''} />
              </div>
              <div className="col-md-6 pl-10">
                <Input type="email"  name="email" title="Your e-mail" validator={'required,email'} />
              </div>
              <div className="col-md-6 pr-10">
                  <Input type="tel" name="tel" title="Phone" validator={'required'}/>
              </div>
              <div className="col-md-6 pl-10">
                  <Input type="text"  name="subject" title="Subject" validator={'required'}/>
              </div>
              <div className="col-12">
                <Textarea  rows="3" name={'message'} title="Type your message here..." validator={'required'} />
                <Button type={'submit'} class="btn-cyan btn-bit-bigger" title={'Send'} />
              </div>
            </div>
          </Form>
        </div>
        <Icon />
      </section>
    );
  }
}
