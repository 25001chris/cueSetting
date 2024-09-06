import { useCookies } from '@vueuse/integrations/useCookies';
import { WEBSITE_THEME_NAME_KEY } from '@/constants.js';
import moment from 'moment';

const cookies = useCookies();

export const setThemeNameToCookies = (value) => {
  cookies.set(WEBSITE_THEME_NAME_KEY, value, {
    path: '/',
    // cookie 有效時間為 1 年
    expires: moment().add(1, 'years').toDate()
  });
};

export const getThemeNameFromCookies = () =>
  cookies.get(WEBSITE_THEME_NAME_KEY);
