import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { ChakraProvider } from "@chakra-ui/react";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  
  return (
    <ChakraProvider>
      <div style={{ width: "100%", backgroundColor: "#7de1ff" }}>
        {user && <SideDrawer />}
        <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh">
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default Chatpage;
