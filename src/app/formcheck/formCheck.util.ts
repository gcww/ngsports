import { FormControl, FormGroup } from "@angular/forms";

/**
 * 邮箱验证
 * @param control 
 */
export const emailValidator = (control: FormControl): { [s: string]: boolean } => {
  const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  if (!control.value) {
    return { required: true }
  } else if (!EMAIL_REGEXP.test(control.value)) {
    return { error: true, email: true };
  }
};

/**
 * 生日验证
 * @param control 
 */
export const birthDayValidator = (control: FormControl): any => {
  if (new Date(control.value) > new Date()) {
    return { expired: true, error: true }
  }
};


export const phoneCheck = (control: FormControl): { [s: string]: boolean } => {
  const PHONE_REGEXP = /^((13[0-9])|(15([0-3]|[5-9]))|(18[0-9])|(178)|(147))[\d]{8}$/;
  if (!control.value) {
    return { required: true }
  } else if (!PHONE_REGEXP.test(control.value)) {
    return { error: true, phone: true };
  }
}