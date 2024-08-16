import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHexagonLetterA } from "@tabler/icons-react";

const SideBar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        className="md:hidden"
        position="right"
        opened={opened}
        onClose={close}
        size={"50vw"}
        title={<IconHexagonLetterA size={60} color="#64FFDA" stroke={1.25} />}
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        
      </Drawer>

      <Button className="md:!hidden" onClick={open}>
        Open drawer
      </Button>
    </>
  );
};

export default SideBar;
