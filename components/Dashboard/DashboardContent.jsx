"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postTableData, setFilter, setUserLocation } from '@/redux/slices/tableSlice';
import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GoogleMapIcon from "@/components/Dashboard/GoogleMapIcon";
import WhatsAppPhone from "@/components/Dashboard/WhatsAppPhone";
import PhoneDialer from "@/components/Dashboard/PhoneDialer";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import { toast } from 'react-toastify';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCog } from '@fortawesome/free-solid-svg-icons'; // faCog can be used for "service"



const optionsRadius = [5, 10, 15, 20];
const options = [
    {
        label: "All",
        value: "All",
        img: "/all.png"
    },
    {
        label: "Engin Oil",
        value: "gas station",
        img: (
            <svg width="130" height="120" viewBox="0 0 88 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_313_540)">
                    <path d="M85.9762 21.8991L56.7896 30.5661L49.8971 27.1314C48.6839 26.527 47.3463 26.2121 45.99 26.2115H38.2238V19.6796H45.8685C47.0753 19.6796 48.0528 18.7053 48.0528 17.5023V15.325C48.0528 14.122 47.0753 13.1477 45.8685 13.1477H24.0264C22.8196 13.1477 21.8422 14.122 21.8422 15.325V17.5023C21.8422 18.7053 22.8196 19.6796 24.0264 19.6796H31.6711V26.2115H24.0264L5.14929 22.7904C4.88857 22.7425 4.624 22.7183 4.35888 22.7183C2.00265 22.7183 0 24.6275 0 27.0743V39.9952C0 42.099 1.50984 43.9035 3.58757 44.2791L13.1053 46.0059V52.3392C13.1053 54.7437 15.0615 56.6938 17.4737 56.6938H54.9644C56.1316 56.6938 57.251 56.2284 58.0715 55.3997L87.0478 26.1761C87.2526 25.972 87.3673 25.6944 87.3673 25.4059V22.9456C87.3686 22.223 86.6738 21.7004 85.9762 21.8991ZM13.1053 39.3665L6.55265 38.1785V29.683L13.1053 30.871V39.3665ZM74.991 50.8872C74.991 54.0933 77.5984 56.6938 80.816 56.6938C84.0336 56.6938 86.641 54.0946 86.641 50.8872C86.641 47.6797 80.816 39.2754 80.816 39.2754C80.816 39.2754 74.991 47.6811 74.991 50.8872Z" fill="#224C17" />
                </g>
                <defs>
                    <clipPath id="clip0_313_540">
                        <rect width="87.3686" height="69.6737" fill="white" transform="translate(0 0.0839844)" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        label: "Mechanical",
        value: "Mechanical",
        img: (
            <svg width="130" height="130" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.1612 57.5374C72.1957 57.021 72.299 56.5045 72.299 55.9881V57.7095L72.1612 57.5374ZM37.871 55.9881C37.871 58.4325 38.3874 60.7736 39.317 62.8737H20.657V66.3165C20.657 68.21 19.1077 69.7593 17.2142 69.7593H13.7714C11.8779 69.7593 10.3286 68.21 10.3286 66.3165V38.7741L17.4896 18.1174C18.1782 16.1205 20.1062 14.6746 22.3784 14.6746H60.2492C62.5214 14.6746 64.4494 16.1205 65.1379 18.1174L72.299 38.7741V55.9881C72.299 46.486 64.5871 38.7741 55.085 38.7741C45.5829 38.7741 37.871 46.486 37.871 55.9881ZM27.5426 47.3811C27.5426 44.5236 25.2359 42.2169 22.3784 42.2169C19.5209 42.2169 17.2142 44.5236 17.2142 47.3811C17.2142 50.2387 19.5209 52.5453 22.3784 52.5453C25.2359 52.5453 27.5426 50.2387 27.5426 47.3811ZM65.4134 35.3313L60.2492 19.8388H22.3784L17.2142 35.3313H65.4134ZM78.737 73.8562L64.5871 59.7063C65.9986 56.1258 65.2068 51.9256 62.246 48.9992C59.1475 45.8663 54.4997 45.2466 50.747 46.968L57.4261 53.647L52.7783 58.3292L45.9271 51.6158C44.068 55.3684 44.9287 60.0162 47.9584 63.1491C49.3257 64.544 51.0709 65.5087 52.9794 65.9246C54.8878 66.3406 56.8762 66.1896 58.6999 65.4902L72.8498 79.6057C73.4695 80.2598 74.3991 80.2598 75.0188 79.6057L78.5993 76.0596C79.3567 75.4399 79.3567 74.3382 78.737 73.8562Z" fill="#224C17" />
            </svg>
        ),
    },
    {
        label: "Towing",
        value: "towing",
        img: (
            <svg width="130" height="130" viewBox="0 0 77 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.447754 45.3315V31.5412H28.7179L7.34292 14.648V24.646H0.447754V3.96052H3.89533L41.8187 24.8184V0.512939H59.0566L76.2945 21.1984V45.3315H67.6756C67.6756 48.2045 66.67 50.6465 64.6589 52.6576C62.6479 54.6687 60.2058 55.6742 57.3328 55.6742C54.4599 55.6742 52.0178 54.6687 50.0067 52.6576C47.9956 50.6465 46.9901 48.2045 46.9901 45.3315H28.0284C28.0284 48.2045 27.0229 50.6465 25.0118 52.6576C23.0007 54.6687 20.5586 55.6742 17.6857 55.6742C14.8127 55.6742 12.3706 54.6687 10.3595 52.6576C8.34846 50.6465 7.34292 48.2045 7.34292 45.3315H0.447754ZM17.6857 50.5029C19.1796 50.5029 20.415 50.0145 21.3918 49.0376C22.3686 48.0608 22.857 46.8254 22.857 45.3315C22.857 43.8375 22.3686 42.6022 21.3918 41.6253C20.415 40.6485 19.1796 40.1601 17.6857 40.1601C16.1917 40.1601 14.9563 40.6485 13.9795 41.6253C13.0027 42.6022 12.5143 43.8375 12.5143 45.3315C12.5143 46.8254 13.0027 48.0608 13.9795 49.0376C14.9563 50.0145 16.1917 50.5029 17.6857 50.5029ZM57.3328 50.5029C58.8268 50.5029 60.0622 50.0145 61.039 49.0376C62.0158 48.0608 62.5042 46.8254 62.5042 45.3315C62.5042 43.8375 62.0158 42.6022 61.039 41.6253C60.0622 40.6485 58.8268 40.1601 57.3328 40.1601C55.8389 40.1601 54.6035 40.6485 53.6267 41.6253C52.6499 42.6022 52.1615 43.8375 52.1615 45.3315C52.1615 46.8254 52.6499 48.0608 53.6267 49.0376C54.6035 50.0145 55.8389 50.5029 57.3328 50.5029ZM48.7139 21.1984H67.3308L55.7814 7.4081H48.7139V21.1984Z" fill="#224C17" />
            </svg>
        ),
    },
    {
        label: "Locked",
        value: "locked",
        img: (
            <svg width="130" height="130" viewBox="0 0 63 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.1059 0.800049C15.245 0.800049 10.7632 5.2819 10.7632 11.1428C10.7632 17.0037 15.245 21.4855 21.1059 21.4855C25.5877 21.4855 29.3801 18.7275 30.7591 14.5904H38.3438V21.4855H45.239V14.5904H52.1341V7.69521H30.7591C29.3801 3.55811 25.5877 0.800049 21.1059 0.800049ZM21.1059 7.69521C23.1744 7.69521 24.5535 9.07424 24.5535 11.1428C24.5535 13.2113 23.1744 14.5904 21.1059 14.5904C19.0373 14.5904 17.6583 13.2113 17.6583 11.1428C17.6583 9.07424 19.0373 7.69521 21.1059 7.69521ZM12.4869 28.3807C10.0736 28.3807 8.34984 29.7597 7.66033 31.8283L0.42041 52.5138V80.0944C0.42041 82.1629 1.79944 83.542 3.86799 83.542H7.31557C9.38412 83.542 10.7632 82.1629 10.7632 80.0944V76.6468H52.1341V80.0944C52.1341 82.1629 53.5131 83.542 55.5817 83.542H59.0293C61.0978 83.542 62.4769 82.1629 62.4769 80.0944V52.5138L55.2369 31.8283C54.5474 29.7597 52.4789 28.3807 50.4103 28.3807H12.4869ZM12.4869 33.5521H50.4103L55.5817 49.0662H7.31557L12.4869 33.5521ZM12.4869 55.9613C15.245 55.9613 17.6583 58.3746 17.6583 61.1327C17.6583 63.8908 15.245 66.3041 12.4869 66.3041C9.72888 66.3041 7.31557 63.8908 7.31557 61.1327C7.31557 58.3746 9.72888 55.9613 12.4869 55.9613ZM50.4103 55.9613C53.1684 55.9613 55.5817 58.3746 55.5817 61.1327C55.5817 63.8908 53.1684 66.3041 50.4103 66.3041C47.6523 66.3041 45.239 63.8908 45.239 61.1327C45.239 58.3746 47.6523 55.9613 50.4103 55.9613Z" fill="#224C17" />
            </svg>
        ),
    },
    {
        label: "Low Fuel",
        value: "low fuel",
        img: (
            <svg width="130" height="130" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.7512 28.0968V58.4355C66.7512 59.167 66.4606 59.8685 65.9434 60.3857C65.4261 60.903 64.7246 61.1935 63.9931 61.1935C63.2616 61.1935 62.5601 60.903 62.0429 60.3857C61.5256 59.8685 61.235 59.167 61.235 58.4355V47.4032C61.235 45.2088 60.3633 43.1042 58.8116 41.5525C57.2599 40.0008 55.1553 39.129 52.9608 39.129H44.6867V6.03224C44.6867 4.56927 44.1055 3.16622 43.071 2.13175C42.0365 1.09727 40.6335 0.516113 39.1705 0.516113H6.07375C4.61078 0.516113 3.20773 1.09727 2.17325 2.13175C1.13878 3.16622 0.557617 4.56927 0.557617 6.03224V66.7097C0.557617 68.1726 1.13878 69.5757 2.17325 70.6102C3.20773 71.6446 4.61078 72.2258 6.07375 72.2258H39.1705C40.6335 72.2258 42.0365 71.6446 43.071 70.6102C44.1055 69.5757 44.6867 68.1726 44.6867 66.7097V44.6451H52.9608C53.6923 44.6451 54.3939 44.9357 54.9111 45.453C55.4283 45.9702 55.7189 46.6717 55.7189 47.4032V58.4355C55.7189 60.6299 56.5907 62.7345 58.1424 64.2862C59.6941 65.8379 61.7987 66.7097 63.9931 66.7097C66.1876 66.7097 68.2921 65.8379 69.8438 64.2862C71.3956 62.7345 72.2673 60.6299 72.2673 58.4355V22.5806C72.2673 21.1177 71.6861 19.7146 70.6517 18.6801C69.6172 17.6457 68.2141 17.0645 66.7512 17.0645V8.73515C66.7367 8.01326 66.4398 7.32583 65.9241 6.82046C65.4084 6.31509 64.7151 6.0321 63.9931 6.03224C63.609 6.03859 63.2303 6.12353 62.8803 6.28184C62.5302 6.44014 62.2164 6.66846 61.958 6.9527C61.6995 7.23695 61.5021 7.57111 61.3778 7.93459C61.2534 8.29806 61.2049 8.68315 61.235 9.06611V22.5806C61.235 23.6716 61.5586 24.7381 62.1647 25.6452C62.7708 26.5523 63.6323 27.2594 64.6402 27.6769C65.6482 28.0944 66.7573 28.2036 67.8273 27.9908C68.8973 27.7779 69.8802 27.2526 70.6517 26.4811C71.4231 25.7097 71.9485 24.7268 72.1613 23.6568C72.3742 22.5867 72.2649 21.4776 71.8474 20.4697C71.4299 19.4618 70.7229 18.6003 69.8158 17.9941C68.9086 17.388 67.8422 17.0645 66.7512 17.0645V28.0968ZM39.1705 30.8548C39.1705 31.5863 38.8799 32.2878 38.3627 32.8051C37.8455 33.3223 37.1439 33.6129 36.4125 33.6129H8.83181C8.10033 33.6129 7.3988 33.3223 6.88157 32.8051C6.36433 32.2878 6.07375 31.5863 6.07375 30.8548V14.3064C6.07375 13.575 6.36433 12.8734 6.88157 12.3562C7.3988 11.839 8.10033 11.5484 8.83181 11.5484H36.4125C37.1439 11.5484 37.8455 11.839 38.3627 12.3562C38.8799 12.8734 39.1705 13.575 39.1705 14.3064V30.8548Z" fill="#224C17" />
            </svg>
        ),
    },
    {
        label: "Flat Tire",
        value: "flat tire",
        img: (
            <svg
                width="130"
                height="130"
                viewBox="0 0 83 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M66.1701 3.60707C65.7344 3.61208 65.6582 3.70503 65.6508 3.71359C65.6432 3.7223 65.5617 3.81122 65.6188 4.24324C65.6761 4.67526 65.9029 5.34951 66.3218 6.11962C67.1595 7.65984 68.7298 9.58398 70.7743 11.355C72.8187 13.1261 74.947 14.4059 76.591 15.0154C77.4129 15.3201 78.1128 15.4484 78.5485 15.4434C78.9843 15.4386 79.0606 15.3456 79.0682 15.3369C79.0756 15.3282 79.1568 15.2394 79.0996 14.8074C79.0424 14.3754 78.8156 13.7011 78.3967 12.931C77.5591 11.3908 75.9887 9.46666 73.9442 7.6955C71.8998 5.92451 69.7712 4.64475 68.1272 4.03522C67.3053 3.73037 66.606 3.60207 66.1701 3.60707ZM41.3137 9.70212C20.3685 9.70212 3.38916 26.6815 3.38916 47.6267C3.38916 57.7854 7.38334 67.0111 13.887 73.8193C-0.846447 81.6892 30.5275 78.6118 41.3137 78.6118C52.0722 78.6118 82.2216 82.9949 73.4153 69.7878C78.0773 61.5781 79.2383 57.8134 79.2383 47.6267C79.2383 37.1638 75.0011 27.6909 68.1493 20.8295L56.672 27.6343L61.6452 15.6082C55.7689 11.8691 48.7947 9.70212 41.3137 9.70212ZM66.4921 11.4886L62.6867 20.6912L71.2525 15.6124L68.8737 13.5519L68.8724 13.5507L68.8712 13.5494L66.4921 11.4886ZM41.3137 22.9354C54.9332 22.9354 66.005 34.0072 66.005 47.6267C66.005 61.2461 54.9332 72.318 41.3137 72.318C27.6943 72.318 16.6224 61.2461 16.6224 47.6267C16.6224 34.0072 27.6943 22.9354 41.3137 22.9354ZM41.3137 25.8402C38.0188 25.8402 34.8977 26.5697 32.1005 27.874C33.9639 33.1802 37.153 39.8804 41.3137 39.8804C45.4811 39.8804 48.5639 33.1589 50.4724 27.8486C47.6891 26.5603 44.5872 25.8402 41.3137 25.8402ZM57.2504 32.7602C52.7779 36.1723 47.3833 41.2796 48.6698 45.2394C49.9578 49.2035 57.305 50.0579 62.9454 50.2318C63.0467 49.3775 63.1002 48.5086 63.1002 47.6267C63.1002 41.8747 60.8804 36.6508 57.2504 32.7602ZM25.3407 32.7995C21.7322 36.6857 19.5273 41.8939 19.5273 47.6267C19.5273 48.5223 19.5821 49.4048 19.6867 50.2717C25.3081 50.1386 32.6587 49.1754 33.9438 45.2205C35.2306 41.2599 29.7995 36.2553 25.3407 32.7995ZM36.6677 39.8426C36.4035 39.8502 36.1464 39.9297 35.924 40.0726C35.7017 40.2155 35.5225 40.4163 35.4059 40.6535C35.2892 40.8907 35.2395 41.1552 35.2621 41.4185C35.2847 41.6819 35.3787 41.9341 35.534 42.1479C35.6811 42.3505 35.878 42.5115 36.1056 42.6155C36.3333 42.7195 36.5839 42.763 36.8333 42.7416C37.0827 42.7202 37.3223 42.6347 37.5289 42.4935C37.7355 42.3522 37.9021 42.16 38.0126 41.9354C38.123 41.7108 38.1736 41.4615 38.1593 41.2116C38.145 40.9618 38.0664 40.7198 37.9311 40.5093C37.7958 40.2987 37.6084 40.1267 37.387 40.0099C37.1657 39.8931 36.9179 39.8355 36.6677 39.8426ZM45.9597 39.8426C45.7095 39.8355 45.4618 39.8931 45.2404 40.0099C45.019 40.1267 44.8316 40.2987 44.6963 40.5093C44.561 40.7198 44.4824 40.9618 44.4682 41.2116C44.4539 41.4615 44.5044 41.7108 44.6149 41.9354C44.7253 42.16 44.8919 42.3522 45.0985 42.4935C45.3052 42.6347 45.5448 42.7202 45.7941 42.7416C46.0435 42.763 46.2941 42.7195 46.5218 42.6155C46.7494 42.5115 46.9463 42.3505 47.0934 42.1479C47.2487 41.9341 47.3428 41.6819 47.3653 41.4185C47.3879 41.1552 47.3382 40.8907 47.2216 40.6535C47.1049 40.4163 46.9258 40.2155 46.7034 40.0726C46.4811 39.9297 46.2239 39.8502 45.9597 39.8426ZM41.3137 42.4625C38.4616 42.4625 36.1495 44.7746 36.1495 47.6267C36.1495 50.4788 38.4616 52.7909 41.3137 52.7909C44.1658 52.7909 46.4779 50.4788 46.4779 47.6267C46.4779 44.7746 44.1658 42.4625 41.3137 42.4625ZM33.8423 48.6009C33.6148 48.6042 33.3913 48.6608 33.1897 48.7662C32.9882 48.8717 32.8142 49.023 32.6818 49.2079C32.5494 49.3929 32.4623 49.6064 32.4275 49.8312C32.3927 50.056 32.4112 50.2858 32.4815 50.5022C32.6005 50.8685 32.8602 51.1725 33.2034 51.3474C33.5466 51.5222 33.9452 51.5536 34.3116 51.4346C34.6422 51.3272 34.9233 51.1049 35.1039 50.8078C35.2845 50.5108 35.3526 50.1589 35.2958 49.8159C35.239 49.4729 35.0611 49.1617 34.7944 48.9388C34.5277 48.7159 34.1898 48.596 33.8423 48.6009ZM48.7061 48.6019C48.3434 48.6164 47.9993 48.7662 47.7416 49.0217C47.4838 49.2773 47.3311 49.62 47.3134 49.9826C47.2958 50.3451 47.4145 50.7011 47.6463 50.9805C47.878 51.2598 48.2059 51.4423 48.5655 51.4919C48.925 51.5416 49.2901 51.4548 49.5889 51.2487C49.8877 51.0426 50.0984 50.7321 50.1797 50.3784C50.261 50.0246 50.2068 49.6533 50.028 49.3374C49.8491 49.0216 49.5585 48.7842 49.2133 48.6719C49.0497 48.6187 48.878 48.595 48.7061 48.6019ZM33.9573 53.0746C30.4731 53.0914 25.8495 55.7909 22.2695 58.2271C25.3404 63.7412 30.7355 67.7751 37.1396 69.0134C38.7518 63.6249 40.1122 56.3259 36.7449 53.8795C35.9615 53.3104 35.0121 53.0694 33.9573 53.0746ZM48.6456 53.0778C47.5837 53.0778 46.6296 53.3225 45.8463 53.8915C42.4742 56.3414 43.9318 63.5915 45.5093 69.0093C51.914 67.7643 57.3076 63.7225 60.3725 58.2012C56.8211 55.7443 52.1526 53.0778 48.6456 53.0776V53.0778ZM41.3137 54.0141C40.9285 54.0141 40.5591 54.1672 40.2867 54.4395C40.0143 54.7119 39.8613 55.0814 39.8613 55.4666C39.8613 55.8518 40.0143 56.2212 40.2867 56.4936C40.5591 56.766 40.9285 56.919 41.3137 56.919C41.6989 56.919 42.0684 56.766 42.3407 56.4936C42.6131 56.2212 42.7661 55.8518 42.7661 55.4666C42.7661 55.0814 42.6131 54.7119 42.3407 54.4395C42.0684 54.1672 41.6989 54.0141 41.3137 54.0141Z"
                    fill="#224C17"
                />
            </svg>
        ),
    },
    {
        label: "Break Down",
        value: "break down",
        img: (
            <svg width="130" height="130" viewBox="0 0 83 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.1612 57.5374C72.1957 57.021 72.299 56.5045 72.299 55.9881V57.7095L72.1612 57.5374ZM37.871 55.9881C37.871 58.4325 38.3874 60.7736 39.317 62.8737H20.657V66.3165C20.657 68.21 19.1077 69.7593 17.2142 69.7593H13.7714C11.8779 69.7593 10.3286 68.21 10.3286 66.3165V38.7741L17.4896 18.1174C18.1782 16.1205 20.1062 14.6746 22.3784 14.6746H60.2492C62.5214 14.6746 64.4494 16.1205 65.1379 18.1174L72.299 38.7741V55.9881C72.299 46.486 64.5871 38.7741 55.085 38.7741C45.5829 38.7741 37.871 46.486 37.871 55.9881ZM27.5426 47.3811C27.5426 44.5236 25.2359 42.2169 22.3784 42.2169C19.5209 42.2169 17.2142 44.5236 17.2142 47.3811C17.2142 50.2387 19.5209 52.5453 22.3784 52.5453C25.2359 52.5453 27.5426 50.2387 27.5426 47.3811ZM65.4134 35.3313L60.2492 19.8388H22.3784L17.2142 35.3313H65.4134ZM78.737 73.8562L64.5871 59.7063C65.9986 56.1258 65.2068 51.9256 62.246 48.9992C59.1475 45.8663 54.4997 45.2466 50.747 46.968L57.4261 53.647L52.7783 58.3292L45.9271 51.6158C44.068 55.3684 44.9287 60.0162 47.9584 63.1491C49.3257 64.544 51.0709 65.5087 52.9794 65.9246C54.8878 66.3406 56.8762 66.1896 58.6999 65.4902L72.8498 79.6057C73.4695 80.2598 74.3991 80.2598 75.0188 79.6057L78.5993 76.0596C79.3567 75.4399 79.3567 74.3382 78.737 73.8562Z" fill="#224C17" />
            </svg>
        ),
    },
    {
        label: "Battery Dead",
        value: "battery dead",
        img: (
            <svg width="130" height="115" viewBox="0 0 70 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.8561 10.5716H7.77134C3.97393 10.5716 0.885742 13.6597 0.885742 17.4571V51.8851C0.885742 55.6825 3.97393 58.7707 7.77134 58.7707H62.8561C66.6535 58.7707 69.7417 55.6825 69.7417 51.8851V17.4571C69.7417 13.6597 66.6535 10.5716 62.8561 10.5716ZM24.9853 38.1139H7.77134V31.2283H24.9853V38.1139ZM62.8561 38.1139H55.9705V44.9995H49.0849V38.1139H42.1993V31.2283H49.0849V24.3427H55.9705V31.2283H62.8561V38.1139ZM7.77134 0.243164H21.5425V7.12876H7.77134V0.243164ZM49.0849 0.243164H62.8561V7.12876H49.0849V0.243164Z" fill="#224C17" />
            </svg>
        ),
    },
    {
        label: "Engin Heat",
        value: "engin heat",
        img: (
            <svg width="130" height="130" viewBox="0 0 83 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.371 24.8792H51.7137V17.984H41.371V14.5364C41.371 12.4679 39.9919 11.0888 37.9234 11.0888C35.8548 11.0888 34.4758 12.4679 34.4758 14.5364V50.0465C32.4073 51.0808 31.0282 53.4941 31.0282 55.9074C31.0282 59.6997 34.131 62.8025 37.9234 62.8025C41.7157 62.8025 44.8185 59.6997 44.8185 55.9074C44.8185 53.4941 43.4395 51.0808 41.371 50.0465V38.6695H51.7137V31.7743H41.371V24.8792ZM82.7419 31.7743C82.7419 43.1858 78.1222 53.5286 70.6754 61.0788L66.952 57.3554C73.5024 50.736 77.5706 41.7723 77.5706 31.7743C77.5706 21.8108 73.5024 12.8126 66.952 6.19327L70.6754 2.46988C78.1222 10.0201 82.7419 20.3628 82.7419 31.7743ZM5.17137 31.7743C5.17137 41.7723 9.23952 50.736 15.7899 57.3554L12.0665 61.0788C4.61976 53.5286 0 43.1858 0 31.7743C0 20.3628 4.61976 10.0201 12.0665 2.46988L15.7899 6.19327C9.23952 12.8126 5.17137 21.8108 5.17137 31.7743ZM72.3992 31.7743C72.3992 43.9443 65.3661 54.4594 55.1613 59.5273V51.5634C58.3496 49.3398 60.9546 46.38 62.7551 42.935C64.5556 39.49 65.4986 35.6615 65.504 31.7743C65.504 18.4667 54.6786 7.64125 41.371 7.64125C28.0633 7.64125 17.2379 18.4667 17.2379 31.7743C17.2433 35.6615 18.1863 39.49 19.9868 42.935C21.7874 46.38 24.3923 49.3398 27.5806 51.5634V59.5273C17.3758 54.4594 10.3427 43.9443 10.3427 31.7743C10.3427 23.5451 13.6118 15.653 19.4307 9.83405C25.2496 4.01513 33.1418 0.746094 41.371 0.746094C49.6002 0.746094 57.4923 4.01513 63.3112 9.83405C69.1301 15.653 72.3992 23.5451 72.3992 31.7743Z" fill="#224C17" />
            </svg>
        ),
    },
];

const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
};


const DashboardContent = () => {
    const [serviceType, setServiceType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const { data, filter, status, error } = useSelector((state) => state.table);

    const dispatch = useDispatch();
    const router = useRouter();
    const localActive = useLocale();

    let tokenLocal = 'empty';
    if (typeof window !== "undefined" && window.localStorage) {
        tokenLocal = localStorage.getItem("token");
    }

    useEffect(() => {
        if (status === 'idle') {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(setUserLocation({ lat: latitude, lon: longitude }));
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        }
    }, [status, dispatch]);

    useEffect(() => {
        dispatch(setFilter(10));
    }, [dispatch]);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        const selectedFilter = optionsRadius[index];
        dispatch(setFilter(selectedFilter));
        dispatch(postTableData(serviceType));
        console.log("selectedFilter radius : ", selectedFilter);
        console.log("serviceType in radius : ", serviceType);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleServiceSelect = (service) => {
        setServiceType(service);
        dispatch(postTableData(service));
        handleCloseModal();
    };

    console.log("Data In Dash : , ", data);

    useEffect(() => {
        if (isLoggedIn === 'empty') {
            router.push(`/${localActive}/login`);
        }
    }, [isLoggedIn, router, localActive]);

    useEffect(() => {
        if (status === 'failed') {
            toast.error(`Error with server: ${error}`);
        }
    }, [status, error]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const nearbyServiceProviders = data?.nearby_service_providers || [];
    const currentData = nearbyServiceProviders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    console.log("currentData : , ", currentData)


    return (
        <div className="dashboard">
            {status === 'loading' && <Loading spinnerClass='my-spin ' loading={status === 'loading'} type={'default'} />}

            <HeaderDashboard />

            <div className='my-[100px]'>

                <div className='mb-5 flex items-center justify-center sm:justify-end gap-5 flex-col sm:flex-row'>
                    <div className='flex justify-center items-center'>
                        <List
                            component="nav"
                            aria-label="Device settings"
                            sx={{ bgcolor: 'background.paper' }}
                        >
                            <ListItemButton
                                id="lock-button"
                                aria-haspopup="listbox"
                                aria-controls="lock-menu"
                                aria-label="radius in km"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClickListItem}
                            >
                                <button className='btn-select-dash'><span><FontAwesomeIcon icon={faFilter} size="lg" /></span><span>Radius in km</span></button>
                            </ListItemButton>
                        </List>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'lock-button',
                                role: 'listbox',
                            }}
                        >
                            {optionsRadius.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                    <div className='text-center mb-5 sm:mb-0'>
                        <button className='btn-select-dash' onClick={handleOpenModal}>
                            <span><FontAwesomeIcon icon={faCog} size="lg" /></span><span>Select Service</span>
                        </button>
                    </div>
                </div>


                <div className='relative overflow-x-auto'>
                    <table className='min-h-[350px] w-full text-sm text-left rtl:text-right text-gray-500 '>
                        <thead className='text-xs text-gray-700 uppercase border-b bg-gray-50  '>
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Job</th>
                                <th scope="col" className="px-6 py-3">Location</th>
                                <th scope="col" className="px-6 py-3">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {status === 'succeeded' && currentData.length > 0 ?
                                currentData.map((item) => (
                                    <tr className="bg-white border-b " key={item.id}>
                                        <td className="px-6 py-4">{capitalizeFirstLetter(item.username)}</td>
                                        <td className="px-6 py-4">{capitalizeFirstLetter(item.service_type)}</td>
                                        <td className="px-6 py-4"><GoogleMapIcon latitude={item.location[1]} longitude={item.location[0]} /></td>
                                        <td className="px-6 py-4 flex justify-start items-center gap-4"><span className='min-w-[90px] inline-block'><PhoneDialer phoneNumber={item.phone_number} /></span><span> - </span><WhatsAppPhone phoneNumber={`+20${item.phone_number}`} /></td>
                                    </tr>
                                )) : ""}
                        </tbody>
                    </table>
                    <div className="main-empty">
                        {
                            currentData.length > 0 ? "" :
                                (
                                    <div className='img-empty flex justify-center items-center gap-5 flex-col'>
                                        <img className='lg:max-w-[500px]' src='/empty.png' alt='empty' />
                                        <h3 className='text-[#777] text-[22px] font-medium mb-5'>No Data</h3>
                                    </div>
                                )
                        }
                    </div>
                </div>

                {data.nearby_service_providers > 10 ? (
                    <div className="mt-6">
                        <Stack spacing={2} className="my-5">
                            <Pagination
                                count={Math.ceil(data.nearby_service_providers.length / itemsPerPage)}
                                page={currentPage}
                                onChange={handlePageChange}
                                color="primary"
                            />
                        </Stack>
                    </div>
                ) : ""}

                <ServiceModal
                    open={modalOpen}
                    handleClose={handleCloseModal}
                    handleServiceSelect={handleServiceSelect}
                />
            </div>
        </div>
    );
};

const ServiceModal = ({ open, handleClose, handleServiceSelect }) => (
    <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style }}>
            <h3 className="text-[22px] mt-4 font-bold text-mainColor text-center mb-4">Select a Service</h3>
            <div className="cont grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-7 max-w-full gap-[40px]">
                {options.map((option) => (
                    <div key={option} onClick={() => handleServiceSelect(option.value)} className="service-item transition-all duration-500 bg-white p-2 rounded border-[#eee] border-[2px] relative flex flex-col justify-between items-center cursor-pointer hover:bg-[#fbfbfb]" >
                        <div className="flex flex-col h-full w-full">
                            <div className="image flex justify-center items-center text-center">
                                {typeof option.img === 'string' ? (
                                    <div className="w-[60px] h-[60px] svg-dash"><img src={option.img} alt={option.title} /></div>
                                ) : (
                                    <div className="w-[60px] h-[60px] svg-dash">{option.img}</div>
                                )}
                            </div>
                            <div className={`info flex-1`}>
                                <h3 className="text-[16px] mt-4 font-medium text-[#333] text-center">{option.label}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Box>
    </Modal>
);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default DashboardContent