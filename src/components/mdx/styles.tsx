import { FaLongArrowAltRight } from "react-icons/fa";
import styled from "styled-components";

import { Paragraph } from "@/styles/typography";

export const UnorderedListBullet = styled(FaLongArrowAltRight).attrs({
	"aria-label": "marker",
})`
	color: var(--color-primary-accent);
	margin-right: 10px;
`;
export const UnorderedListStyled = styled.ul`
	padding-left: 0;
	margin: var(--list-item-spacing) 0;

	li {
		display: flex;
		align-items: flex-start;
		list-style: none;
		padding: 0;
		margin-bottom: var(--list-item-spacing);

		&:last-child {
			margin-bottom: 0;
		}
		&:only-child {
			margin-top: var(--list-item-spacing);
		}

		& > svg {
			margin-top: 5px;

			& ~ span {
				flex: 1 1 0%;
			}
		}

		${Paragraph} {
			padding: 0;
		}

		/* For nested lists */
		ul {
			margin-bottom: 0;
		}
	}
`;

export const OrderedListStyled = styled.ol`
	--counter-name: counts;
	counter-reset: var(--counter-name);
	padding-left: 0;

	li {
		display: flex;
		align-items: center;
		list-style: outside none none;
		counter-increment: var(--counter-name);
		padding: 0;
		margin-bottom: var(--list-item-spacing);

		&:last-child {
			margin-bottom: 0;
		}
		&:only-child {
			margin-top: var(--list-item-spacing);
		}

		&::before {
			color: var(--color-primary-accent);
			font-family: var(--font-family-code);
			font-feature-settings: "tnum";
			content: counters(var(--counter-name), ".") ". ";
			padding-right: 10px;
		}
	}
`;
