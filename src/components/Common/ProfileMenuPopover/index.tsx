import { FC } from "react";
import { ProfileMenuPopoverProps } from "./types";
import { Avatar, Button, Flex, Tooltip, Typography } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";

const ProfileMenuPopover: FC<ProfileMenuPopoverProps> = ({
  profile,
  handleLogout,
}) => {
  return (
    <Flex className={styles["body"]} gap={20} vertical>
      <Flex gap={20} align="center" justify="space-between">
        <Tooltip title="Хранилище" placement="bottomRight">
          <Button type="text" shape="circle" icon={<AppstoreOutlined />} />
        </Tooltip>
        <Tooltip title="Профиль" placement="bottomRight">
          <Button type="text" shape="circle" icon={<UserOutlined />} />
        </Tooltip>
        <Tooltip title="Настройки" placement="bottomRight">
          <Button type="text" shape="circle" icon={<SettingOutlined />} />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Выйти">
          <Button
            onClick={handleLogout}
            icon={<LogoutOutlined />}
            type="text"
            shape="circle"
          />
        </Tooltip>
      </Flex>
      <Flex gap={20} align="center" vertical>
        <Avatar className={styles["avatar"]} src={profile.avatar} />
        <Typography.Text className={styles["login"]}>
          {profile.login}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

export default ProfileMenuPopover;