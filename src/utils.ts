import SearchIconRaw from './icons/SearchIcon.vue?raw';
import CartIconRaw from './icons/CartIcon.vue?raw';
import LayersIconRaw from './icons/LayersIcon.vue?raw';
import GripIconRaw from './icons/GripIcon.vue?raw';
import FrameIconRaw from './icons/FrameIcon.vue?raw';
import SunIconRaw from './icons/SunIcon.vue?raw';
import DeleteIconRaw from './icons/DeleteIcon.vue?raw';
import FileStackIconRaw from './icons/FileStackIcon.vue?raw';
import SettingGearIconRaw from './icons/SettingGearIcon.vue?raw';
import CalendarCogIconRaw from './icons/CalendarCogIcon.vue?raw';
import MenuIconRaw from './icons/MenuIcon.vue?raw';
import CopyIconRaw from './icons/CopyIcon.vue?raw';
import AudioLinesIconRaw from './icons/AudioLinesIcon.vue?raw';
import ArchiveIconRaw from './icons/ArchiveIcon.vue?raw';
import LogoutIconRaw from './icons/LogoutIcon.vue?raw';
import CircleHelpIconRaw from './icons/CircleHelpIcon.vue?raw';
import SquareStackIconRaw from './icons/SquareStackIcon.vue?raw';
import MessageCircleIconRaw from './icons/MessageCircleIcon.vue?raw';
import MessageCircleMoreIconRaw from './icons/MessageCircleMoreIcon.vue?raw';
import ArrowLeftIconRaw from './icons/ArrowLeftIcon.vue?raw';
import ArrowRightIconRaw from './icons/ArrowRightIcon.vue?raw';
import RefreshIconRaw from './icons/RefreshIcon.vue?raw';
import DownloadIconRaw from './icons/DownloadIcon.vue?raw';
import SquarePenIconRaw from './icons/SquarePenIcon.vue?raw';
import CursorClickIconRaw from './icons/CursorClickIcon.vue?raw';
import ClockIconRaw from './icons/ClockIcon.vue?raw';
import BadgeAlertIconRaw from './icons/BadgeAlertIcon.vue?raw';
import BadgePercentIconRaw from './icons/BadgePercentIcon.vue?raw';
import ChartPieIconRaw from './icons/ChartPieIcon.vue?raw';
import CompassIconRaw from './icons/CompassIcon.vue?raw';
import TimerIconRaw from './icons/TimerIcon.vue?raw';
import ExpandIconRaw from './icons/ExpandIcon.vue?raw';
import GaugeIconRaw from './icons/GaugeIcon.vue?raw';
import BoneIconRaw from './icons/BoneIcon.vue?raw';
import AlignCenterIconRaw from './icons/AlignCenterIcon.vue?raw';
import AlignHorizontalIconRaw from './icons/AlignHorizontalIcon.vue?raw';
import AlignVerticalIconRaw from './icons/AlignVerticalIcon.vue?raw';
import BellIconRaw from './icons/BellIcon.vue?raw';
import UpvoteIconRaw from './icons/UpvoteIcon.vue?raw';
import DownvoteIconRaw from './icons/DownvoteIcon.vue?raw';
import UsersIconRaw from './icons/UsersIcon.vue?raw';
import HandCoinsIconRaw from './icons/HandCoinsIcon.vue?raw';
// 512 512
import SyringeIconRaw from './icons/SyringeIcon.vue?raw';
import FlaskIconRaw from './icons/FlaskIcon.vue?raw';

export const getShareLink = (name: string): string => {
  if (name === '') return REPO_URL;
  return `${REPO_URL}/blob/main/src/icons/${name}.vue`;
};

export const CompRaw = {
  SearchIcon: SearchIconRaw,
  CartIcon: CartIconRaw,
  LayersIcon: LayersIconRaw,
  GripIcon: GripIconRaw,
  FrameIcon: FrameIconRaw,
  SunIcon: SunIconRaw,
  DeleteIcon: DeleteIconRaw,
  FileStackIcon: FileStackIconRaw,
  SettingGearIcon: SettingGearIconRaw,
  CalendarCogIcon: CalendarCogIconRaw,
  MenuIcon: MenuIconRaw,
  CopyIcon: CopyIconRaw,
  AudioLinesIcon: AudioLinesIconRaw,
  ArchiveIcon: ArchiveIconRaw,
  LogoutIcon: LogoutIconRaw,
  CircleHelpIcon: CircleHelpIconRaw,
  SquareStackIcon: SquareStackIconRaw,
  MessageCircleIcon: MessageCircleIconRaw,
  MessageCircleMoreIcon: MessageCircleMoreIconRaw,
  ArrowLeftIcon: ArrowLeftIconRaw,
  ArrowRightIcon: ArrowRightIconRaw,
  RefreshIcon: RefreshIconRaw,
  DownloadIcon: DownloadIconRaw,
  SquarePenIcon: SquarePenIconRaw,
  CursorClickIcon: CursorClickIconRaw,
  ClockIcon: ClockIconRaw,
  BadgeAlertIcon: BadgeAlertIconRaw,
  BadgePercentIcon: BadgePercentIconRaw,
  ChartPieIcon: ChartPieIconRaw,
  CompassIcon: CompassIconRaw,
  TimerIcon: TimerIconRaw,
  ExpandIcon: ExpandIconRaw,
  GaugeIcon: GaugeIconRaw,
  BoneIcon: BoneIconRaw,
  AlignCenterIcon: AlignCenterIconRaw,
  AlignHorizontalIcon: AlignHorizontalIconRaw,
  AlignVerticalIcon: AlignVerticalIconRaw,
  BellIcon: BellIconRaw,
  UpvoteIcon: UpvoteIconRaw,
  DownvoteIcon: DownvoteIconRaw,
  UsersIcon: UsersIconRaw,
  HandCoinsIcon: HandCoinsIconRaw,
  SyringeIcon: SyringeIconRaw,
  FlaskIcon: FlaskIconRaw,
};

export const getCompRaw = (name: string): string => {
  return CompRaw[name as keyof typeof CompRaw] || '';
};

export const downloadFile = (fileName: string, fileContent: string): void => {
  // 创建文件对象
  const file = new Blob([fileContent], { type: 'text/plain' });

  // 创建下载链接
  const aLink = document.createElement('a');
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(file);

  // 触发下载
  document.body.appendChild(aLink); // 将链接添加到文档中
  aLink.click(); // 触发点击事件
  document.body.removeChild(aLink); // 下载后移除链接
};
