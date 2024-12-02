import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { useEffect, useState } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    if (locale === 'ar') {
      setDirection('rtl');
      document.body.dir = "rtl"
    } else {
      setDirection('ltr');
      document.body.dir = "ltr";
    }
  }, [locale]);

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en')
        },
        {
          value: 'ar',
          label: t('ar')
        }
      ]}
      label={t('label')}
    />
  );
}