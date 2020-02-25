import React, {Component} from 'react';
import { render } from "react-dom";
import { Field, Form } from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
      <form >
                <Field name="income">
                {({ input, meta }) => (
              <div>
                <label>الدخل الشهري</label>
                <input {...input} type="number" placeholder="الدخل الشهري" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
            </Field>
            <div className="buttons">
           <button name="calculate" onClick={e => this.props.onClick(e.target.name)}>إحســـب</button>
                <button name="reset" onClick={e => this.props.onClick(e.target.name)}>تفريغ الخانات</button>
          </div>
            </form>
        );
    }
}


export default KeyPadComponent;