import type { FC } from 'react';

import Dialog from '@/components/ui/dialog/dialog';

interface TagPeopleModalProps {
  visible: boolean;
  onClose: () => void;
}

const TagPeopleModal: FC<TagPeopleModalProps> = ({ visible, onClose }) => {
  return (
    <Dialog visible={visible} onClose={onClose} title="Tag People">
      Test
    </Dialog>
  );
};

export default TagPeopleModal;
