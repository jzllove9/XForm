import { Button } from '@mui/material';
import { XDrawerForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import schema from './schema';
import store from './store';

export default observer(() => {
  const { visible } = store;

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          store.openDrawer();
        }}
      >
        Open Form
      </Button>
      <XDrawerForm
        path="myFormData"
        store={store}
        schema={schema}
        open={visible}
        title="Drawer Form"
        onSave={() => {
          console.log(store.myFormData);
        }}
        onClose={() => {
          store.closeDrawer();
        }}
        debug
      />
    </>
  );
});
