import { type ClassValue, clsx } from "clsx";
import {
  compareDesc,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format,
  isBefore,
  parse,
} from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortByStartAndEnd = (
  a: { metadata: { startDate: string; endDate?: string } },
  b: { metadata: { startDate: string; endDate?: string } },
) => {
  const startDiff = compareDesc(
    parseDate(a.metadata.startDate),
    parseDate(b.metadata.startDate),
  );

  if (startDiff !== 0) return startDiff; // startDate가 다르면 그대로 정렬

  // startDate가 동일하면 endDate 기준 정렬
  const endDateA = a.metadata.endDate ? parseDate(a.metadata.endDate) : null;
  const endDateB = b.metadata.endDate ? parseDate(b.metadata.endDate) : null;

  if (!endDateA && endDateB) return 1; // endDate가 없는 경우 뒤로
  if (endDateA && !endDateB) return -1; // endDate가 있는 경우 앞으로

  return compareDesc(endDateA ?? new Date(), endDateB ?? new Date());
};

export const formatLastUpdated = (dateString?: string) => {
  if (!dateString) return "N/A";

  const lastUpdatedDate = new Date(dateString);
  const today = new Date();

  // 날짜 형식 변환: 2024. 11. 11
  const formattedDate = format(lastUpdatedDate, "yyyy.MM.dd");

  // D-Day 계산 (오늘 - 마지막 업데이트 날짜)
  const daysDifference = differenceInDays(today, lastUpdatedDate);
  const dDay =
    daysDifference >= 0 ? `D+${daysDifference}` : `D${daysDifference}`;

  return `${formattedDate} (${dDay})`;
};

// 문자열을 Date 객체로 변환하는 함수
export const parseDate = (dateStr: string) => {
  if (!dateStr) return new Date(); // 빈 값이면 현재 날짜로 처리
  return parse(dateStr, "yyyy.MM", new Date());
};

// 날짜 차이 계산 함수
export const calculateDuration = (startDate: string, endDate: string) => {
  const start = parse(startDate, "yyyy.MM", new Date());
  const end = endDate ? parse(endDate, "yyyy.MM", new Date()) : new Date(); // 빈 값이면 현재 날짜 사용

  const months = differenceInMonths(end, start);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years) {
    if (remainingMonths) {
      return `약 ${years}년 ${remainingMonths}개월`;
    }
    return `약 ${years}년`;
  }
  return `약 ${remainingMonths}개월`;
};

export const calculateAge = (birthDateString: string) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  // 한국식 나이 계산 (태어나면 1살부터 시작)
  let age = differenceInYears(today, birthDate) + 1;

  const thisYearBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
  );

  // 생일 여부
  if (isBefore(today, thisYearBirthday)) {
    age--;
  }

  return age;
};
